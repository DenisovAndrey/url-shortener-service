import { UrlService } from './UrlService'

describe('ShortUrlGenerator', () => {
  describe('generateShortUrl', () => {
    const testCases = [
      'https://en.wikipedia.org/wiki/Computer',
      'https://andrey.de/1',
      'https://andrey.de',
      'https://andrey.dev/code?query=qw&more=mr#section',
      'https://andrey.dev/?param=1&key=value#section',
      'https://andrey.dev/'
    ]

    testCases.forEach(testUrl => {
      let encodedUrl: string
      it(`should encode a short URL : ${testUrl}`, () => {
        encodedUrl = UrlService.generateShortUrl(testUrl)
        expect(encodedUrl).toContain('http://short.dev')
      })
      it(`should decode a short URL : ${testUrl}`, () => {
        const decodedUrl = UrlService.getOriginalUrl(encodedUrl)
        expect(decodedUrl).toEqual(testUrl)
      })
    })
  })
})
