const ALPHABET = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

export const generateEncodedHash = (url: string, encodingLength: number): string => {
  let hash = 0n
  for (let i = 0; i < url.length; i++) {
    hash = (hash * 31n + BigInt(url.charCodeAt(i))) % (62n ** BigInt(encodingLength))
  }

  let encoded = ''
  while (hash > 0n) {
    const index = Number(hash % 62n)
    encoded = ALPHABET[index] + encoded
    hash = hash / 62n
  }

  // Pad the encoded string with leading zeros if necessary
  while (encoded.length < encodingLength) {
    encoded = ALPHABET[0] + encoded
  }

  return encoded
}
