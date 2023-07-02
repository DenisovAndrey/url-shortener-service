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

  static getOriginalUrl (shortUrl: string): string {
    const encodedHash = shortUrl.replace(this.BASE_URL, '')
    const url = this.hashCache.get(encodedHash)
    return url !== undefined ? url : ''
  }

  private static generateEncodedHash (url: string): string {
    let hash = 0n
    for (let i = 0; i < url.length; i++) {
      hash = (hash * 31n + BigInt(url.charCodeAt(i))) % (62n ** BigInt(this.ENCODED_LENGTH))
    }

    let encoded = ''
    while (hash > 0n) {
      const index = Number(hash % 62n)
      encoded = this.ALPHABET[index] + encoded
      hash = hash / 62n
    }

    // Pad the encoded string with leading zeros if necessary
    while (encoded.length < this.ENCODED_LENGTH) {
      encoded = this.ALPHABET[0] + encoded
    }

    return encoded
  }
}
