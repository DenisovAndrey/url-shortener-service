import { ShortUrlEncoder } from './ShortUrlEncoder'

describe('ShortUrlGenerator', () => {
  describe('generateShortUrl', () => {
    const testCases = [
      'https://en.wikipedia.org/wiki/Computer',
      'https://andrey.dev/1',
      'https://andrey.dev/code?query=qw&more=mr#section',
      'https://andrey.dev/?param=1&key=value#section'
    ]

    testCases.forEach(testCase => {
      it(`should generate a short URL for URL: ${testCase}`, () => {
        const shortUrl = ShortUrlEncoder.generateShortUrl(testCase)
        expect(shortUrl).toContain('http://short.com')
      })
    })
  })
})
