import { Router } from 'express'
import { UrlCoderPaths } from './routes/paths'

const router = Router()

router.get(UrlCoderPaths.ENCODE, (req, res) => res.status(200).json('ok from encode'))
router.get(UrlCoderPaths.DECODE, (req, res) => res.status(200).json('ok from decode'))

export default router
