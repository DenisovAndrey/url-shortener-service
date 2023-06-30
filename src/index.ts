import express, { type Express } from 'express'
import Controllers from './app'
import { swaggerInit as Swagger } from './documentation/swaggerInit'

const app: Express = express()
const port = process.env.PORT ?? 3001

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

Swagger(app)
Controllers(app)

export default app
