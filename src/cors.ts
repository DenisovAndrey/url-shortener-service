import cors from 'cors'
import { type Application } from 'express'

const allowedOrigins = ((process.env.ALLOWED_ORIGINS?.split(',')) !== null) || []

export default (app: Application): void => {
  app.use(cors({
    origin: allowedOrigins
  }))
}
