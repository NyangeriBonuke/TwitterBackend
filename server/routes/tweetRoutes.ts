import { Router } from 'express'
const router = Router()

router.get('/tweet', (req, res) => {res.status(200).json('Tweet')})

export default router