import express, { type Application } from 'express'
import { UrlCoderPaths } from './urlCoder/routes/paths'
import urlCoderController from './urlCoder'

export default (app: Application): void => {
  app.use(express.json())
  app.use(UrlCoderPaths.ROOT, urlCoderController)
}
