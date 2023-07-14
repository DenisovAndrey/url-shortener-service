import { generateEncodedHash } from './incoder'

describe('generateEncodedHash', () => {
  it('should return a string', () => {
    const url = 'https://www.andrey.dev'
    const encodingLength = 6
    const result = generateEncodedHash(url, encodingLength)
    expect(typeof result).toBe('string')
  })

  it('should return a string of the specified length', () => {
    const url = 'https://www.andrey.dev'
    const encodingLength = 6
    const result = generateEncodedHash(url, encodingLength)
    expect(result.length).toBe(encodingLength)
  })

  it('should return different results for different inputs', () => {
    const url1 = 'https://www.andrey.dev'
    const url2 = 'https://www.different.com'
    const encodingLength = 6
    const result1 = generateEncodedHash(url1, encodingLength)
    const result2 = generateEncodedHash(url2, encodingLength)
    expect(result1).not.toBe(result2)
  })

  it('should return strings containing only characters from the encoding alphabet', () => {
    const url = 'https://www.andrey.dev'
    const encodingLength = 6
    const result = generateEncodedHash(url, encodingLength)
    const encodingAlphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    [...result].forEach(char => {
      expect(encodingAlphabet).toContain(char)
    })
  })
})
