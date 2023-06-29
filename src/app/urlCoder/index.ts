import { Router } from 'express'
import { UrlCoderPaths } from './routes/paths'
import { UrlController } from './controllers/UrlController'

const router = Router()

router.get(UrlCoderPaths.ENCODE, UrlController.encodeUrl)
router.get(UrlCoderPaths.DECODE, UrlController.decodeUrl)

export default router
