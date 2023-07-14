import { type Request } from '../../../types/Request'
import { type Response } from '../../../types/Response'
import { UrlService } from '../services/UrlService'

export const decodeUrl = (req: Request<{ shortUrl: string }>, res: Response<{ originalUrl: string }>): void => {
  const { shortUrl } = req.query

  if (shortUrl === undefined) {
    res.status(400).json({ error: 'Missing shortUrl parameter' })
    return
  }

  const originalUrl = UrlService.getOriginalUrl(shortUrl)
  if (originalUrl === null || originalUrl === '') {
    res.status(400).json({ error: 'Short URL not found' })
    return
  }

  res.json({ originalUrl })
}
