import request from 'supertest'
import app from '../../../index'

const defaultUrl = 'https://en.wikipedia.org/wiki/Computer'

describe('UrlController', () => {
  describe('POST /url/encode', () => {
    it('should encode a URL and return a short URL', async () => {
      const response = await request(app)
        .post('/url/encode')
        .send({ url: defaultUrl })
        .expect(200)

      expect(response.body).toHaveProperty('shortUrl')
    })

    it('should return an error for an invalid request', async () => {
      const response = await request(app)
        .post('/url/encode')
        .send({})
        .expect(400)

      expect(response.body).toHaveProperty('error')
    })
  })

  describe('POST /url/decode', () => {
    it('should decode a short URL and return the original URL', async () => {
      const encodeResponse = await request(app)
        .post('/url/encode')
        .send({ url: defaultUrl })

      const { shortUrl } = encodeResponse.body

      const decodeResponse = await request(app)
        .post('/url/decode')
        .send({ shortUrl })
        .expect(200)

      expect(decodeResponse.body.originalUrl).toEqual(defaultUrl)
    })

    it('should return an error for an invalid request', async () => {
      const response = await request(app)
        .post('/url/decode')
        .send({})
        .expect(400)

      expect(response.body).toHaveProperty('error')
    })

    it('should return an error for a short URL not found', async () => {
      const response = await request(app)
        .post('/url/decode')
        .send({ shortUrl: 'http://short.est/invalid' })
        .expect(404)

      expect(response.body).toHaveProperty('error')
    })
  })
})
