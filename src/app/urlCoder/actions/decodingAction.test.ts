import { type Request, type Response } from 'express'
import { UrlService } from '../services/UrlService'
import { decodeUrl } from './decodingAction'

jest.mock('../helpers/ShortUrlEncoder', () => ({
  ShortUrlCoder: {
    getOriginalUrl: jest.fn()
  }
}))

type ActionRequest = Request<any, any, any, { shortUrl: string }>

describe('decodeUrl', () => {
  let req: Partial<ActionRequest>
  let res: Partial<Response>

  beforeEach(() => {
    req = {
      query: {
        shortUrl: 'test'
      }
    }

    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    }
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('should return 400 if no shortUrl provided', () => {
    req.query = { shortUrl: undefined } as any
    decodeUrl(req as ActionRequest, res as Response)
    expect(res.status).toHaveBeenCalledWith(400)
    expect(res.json).toHaveBeenCalledWith({ error: 'Missing shortUrl parameter' })
  })

  it('should return 400 if shortUrl not found', () => {
    (UrlService.getOriginalUrl as jest.Mock).mockImplementation(() => null)
    decodeUrl(req as ActionRequest, res as Response)
    expect(res.status).toHaveBeenCalledWith(400)
    expect(res.json).toHaveBeenCalledWith({ error: 'Short URL not found' })
  })

  it('should return originalUrl if shortUrl is valid', () => {
    const originalUrl = 'https://www.example.com';
    (UrlService.getOriginalUrl as jest.Mock).mockImplementation(() => originalUrl)
    decodeUrl(req as ActionRequest, res as Response)
    expect(res.json).toHaveBeenCalledWith({ originalUrl })
  })
})
