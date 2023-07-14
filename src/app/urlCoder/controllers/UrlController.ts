import { Router } from 'express'
import { UrlCoderPaths } from '../routes/paths'
import { encodeUrl } from '../actions/encodingAction'
import { decodeUrl } from '../actions/decodingAction'

const router = Router()

router.get(UrlCoderPaths.ENCODE, encodeUrl)
router.get(UrlCoderPaths.DECODE, decodeUrl)

export default router
