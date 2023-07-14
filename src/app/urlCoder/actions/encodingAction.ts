import { UrlService } from '../services/UrlService'
import { type Request } from '../../../types/Request'
import { type Response } from '../../../types/Response'

export const encodeUrl = (req: Request<{ url: string }>, res: Response<{ shortUrl: string }>): void => {
  const { url } = req.query

  if (url === undefined) {
    res.status(400).json({ error: 'Missing URL parameter' })
    return
  }

  const shortUrl = UrlService.generateShortUrl(url)
  res.json({ shortUrl })
}
