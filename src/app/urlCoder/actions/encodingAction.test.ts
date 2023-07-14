import { type Request, type Response } from 'express'
import { UrlService } from '../services/UrlService'
import { encodeUrl } from './encodingAction'

jest.mock('../helpers/ShortUrlEncoder', () => ({
  ShortUrlCoder: {
    generateShortUrl: jest.fn()
  }
}))

type ActionRequest = Request<any, any, any, { url: string }>

describe('encodeUrl', () => {
  let req: Partial<ActionRequest>
  let res: Partial<Response>

  beforeEach(() => {
    req = {
      query: {
        url: 'https://www.example.com'
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

  it('should return 400 if no URL is provided', () => {
    req.query = { url: undefined } as any
    encodeUrl(req as ActionRequest, res as Response)
    expect(res.status).toHaveBeenCalledWith(400)
    expect(res.json).toHaveBeenCalledWith({ error: 'Missing URL parameter' })
  })

  it('should return shortUrl if URL is valid', () => {
    const shortUrl = 'testUrl';
    (UrlService.generateShortUrl as jest.Mock).mockImplementation(() => shortUrl)
    encodeUrl(req as ActionRequest, res as Response)
    expect(res.json).toHaveBeenCalledWith({ shortUrl })
  })
})
