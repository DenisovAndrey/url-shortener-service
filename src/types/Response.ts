import { type Response as ExpressResponse } from 'express'

export type Response<T> = ExpressResponse<T | { error: string }>
