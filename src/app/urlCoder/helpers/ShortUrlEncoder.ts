export class ShortUrlCoder {
  private static readonly BASE_URL = 'http://short.dev/'
  private static readonly ALPHABET = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  private static readonly ENCODED_LENGTH = 6
  private static readonly urlCache = new Map<string, string>()
  private static readonly hashCache = new Map<string, string>()

  static generateShortUrl (url: string): string {
    if (this.urlCache.has(url)) {
      const cachedValue = this.urlCache.get(url)
      if (cachedValue !== undefined) {
        return cachedValue
      }
    }

    const encodedHash = this.generateEncodedHash(url)
    const shortUrl = `${this.BASE_URL}${encodedHash}`

    this.urlCache.set(url, shortUrl)
    this.hashCache.set(encodedHash, url)
    return shortUrl
  }

  static getOriginalUrl (shortUrl: string): string | null {
    const encodedHash = shortUrl.replace(this.BASE_URL, '')
    const url = this.hashCache.get(encodedHash)
    return url ?? null
  }

  private static generateEncodedHash (url: string): string {
    let hash = 0
    for (let i = 0; i < url.length; i++) {
      hash = (hash * 31 + url.charCodeAt(i)) | 0
    }

    let encoded = ''
    for (let i = 0; i < this.ENCODED_LENGTH; i++) {
      const index = hash & 0x3f // Take the last 6 bits of the hash
      encoded += this.ALPHABET[index]
      hash >>>= 6 // Shift the hash 6 bits to the right
    }

    return encoded
  }
}
