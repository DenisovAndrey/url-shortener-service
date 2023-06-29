import { type Request, type Response } from 'express'
import { ShortUrlCoder } from '../helpers/ShortUrlEncoder'

export class UrlController {
  static encodeUrl (req: Request, res: Response): void {
    const { url } = req.query

    if (typeof url !== 'string') {
      res.status(400).json({ error: 'Missing URL parameter' })
      return
    }

    const shortUrl = ShortUrlCoder.generateShortUrl(url)
    res.json({ shortUrl })
  }

  static decodeUrl (req: Request, res: Response): void {
    const { shortUrl } = req.query

    if (typeof shortUrl !== 'string') {
      res.status(400).json({ error: 'Missing shortUrl parameter' })
      return
    }

    const originalUrl = ShortUrlCoder.getOriginalUrl(shortUrl)
    if (originalUrl === null) {
      res.status(400).json({ error: 'Short URL not found' })
      return
    }

    res.json({ originalUrl })
  }
}
