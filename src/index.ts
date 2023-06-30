import express, { type Express } from 'express'
import Controllers from './app'
import { swaggerInit as Swagger } from './documentation/swaggerInit'
import Cors from './cors'

const app: Express = express()
const port = process.env.PORT ?? 3001

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
Cors(app)
Swagger(app)
Controllers(app)

export default app
