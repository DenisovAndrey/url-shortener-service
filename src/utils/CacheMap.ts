class CacheMap<T> {
  private readonly cache = new Map<string, T>()

  get (key: string): T | undefined {
    return this.cache.get(key)
  }

  set (key: string, value: T): void {
    this.cache.set(key, value)
  }
}

export default CacheMap
