import express, { type Express } from 'express'
import Controllers from './app'

const app: Express = express()
const port = process.env.PORT ?? 3000

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

Controllers(app)
