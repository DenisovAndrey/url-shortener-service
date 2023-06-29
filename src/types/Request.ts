import { type Request as ExpressRequest } from 'express'

export type Request<T> = ExpressRequest<unknown, unknown, unknown, T>
