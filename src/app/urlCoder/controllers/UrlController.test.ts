import request from 'supertest'
import express from 'express'
import { UrlController } from './UrlController'
import { UrlCoderPaths } from '../routes/paths'

const app = express()
app.get(UrlCoderPaths.ROOT + UrlCoderPaths.ENCODE, UrlController.encodeUrl)
app.get(UrlCoderPaths.ROOT + UrlCoderPaths.DECODE, UrlController.decodeUrl)

describe('UrlController', () => {
  describe('GET /url/encode', () => {
    it('should return a short URL', async () => {
      const response = await request(app)
        .get(UrlCoderPaths.ROOT + UrlCoderPaths.ENCODE)
        .query({ url: 'https://en.wikipedia.org/wiki/Computer' })

      expect(response.status).toBe(200)
      expect(response.body.shortUrl).toContain('http://short.dev/')
    })

    it('should return an error when URL parameter is missing', async () => {
      const response = await request(app).get(UrlCoderPaths.ROOT + UrlCoderPaths.ENCODE)

      expect(response.status).toBe(400)
      expect(response.body).toHaveProperty('error', 'Missing URL parameter')
    })
  })

  describe('GET /url/decode', () => {
    it('should return the original URL', async () => {
      const encodedResponse = await request(app)
        .get(UrlCoderPaths.ROOT + UrlCoderPaths.ENCODE)
        .query({ url: 'https://en.wikipedia.org/wiki/Computer' })

      const response = await request(app)
        .get(UrlCoderPaths.ROOT + UrlCoderPaths.DECODE)
        .query({ shortUrl: encodedResponse.body.shortUrl })

      expect(response.status).toBe(200)
      expect(response.body.originalUrl).toEqual('https://en.wikipedia.org/wiki/Computer')
    })

    it('should return an error when shortUrl parameter is missing', async () => {
      const response = await request(app).get(UrlCoderPaths.ROOT + UrlCoderPaths.DECODE)

      expect(response.status).toBe(400)
      expect(response.body).toHaveProperty('error', 'Missing shortUrl parameter')
    })
  })
})
