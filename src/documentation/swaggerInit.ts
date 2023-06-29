import { type Application } from 'express'
import swaggerJsDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

export const swaggerInit = (app: Application): void => {
  const swaggerOptions = {
    swaggerDefinition: {
      openapi: '3.0.0',
      info: {
        title: 'URL Shortener API',
        version: '1.0.0',
        description: 'API documentation for URL Shortener'
      }
    },
    apis: ['src/documentation/swagger.yaml']
  }

  const swaggerDocs = swaggerJsDoc(swaggerOptions)
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
}
