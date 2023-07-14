import { generateEncodedHash } from '../helpers/incoder'
import CacheMap from '../../../utils/CacheMap'

export class UrlService {
  private static readonly BASE_URL = 'http://short.dev/'
  private static readonly ENCODED_LENGTH = 6
  private static readonly urlCache = new CacheMap<string>()
  private static readonly hashCache = new CacheMap<string>()

  static generateShortUrl (url: string): string {
    let shortUrl = this.urlCache.get(url)

    if (!shortUrl) {
      const encodedHash = generateEncodedHash(url, this.ENCODED_LENGTH)
      shortUrl = `${this.BASE_URL}${encodedHash}`
      this.urlCache.set(url, shortUrl)
      this.hashCache.set(encodedHash, url)
    }

    return shortUrl
  }

  static getOriginalUrl (shortUrl: string): string {
    const encodedHash = shortUrl.replace(this.BASE_URL, '')
    const url = this.hashCache.get(encodedHash)
    return url !== undefined ? url : ''
  }
}
