import { ShortUrlCoder } from '../helpers/ShortUrlEncoder'
import { type Request } from '../../../types/Request'
import { type Response } from '../../../types/Response'

export class UrlController {
  static encodeUrl (req: Request<{ url: string }>, res: Response<{ shortUrl: string }>): void {
    const { url } = req.query

    if (url === undefined) {
      res.status(400).json({ error: 'Missing URL parameter' })
      return
    }

    const shortUrl = ShortUrlCoder.generateShortUrl(url)
    res.json({ shortUrl })
  }

  static decodeUrl (req: Request<{ shortUrl: string }>, res: Response<{ originalUrl: string }>): void {
    const { shortUrl } = req.query

    if (shortUrl === undefined) {
      res.status(400).json({ error: 'Missing shortUrl parameter' })
      return
    }

    const originalUrl = ShortUrlCoder.getOriginalUrl(shortUrl)
    if (originalUrl === null || originalUrl === '') {
      res.status(400).json({ error: 'Short URL not found' })
      return
    }

    res.json({ originalUrl })
  }
}
