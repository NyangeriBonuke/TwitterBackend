import { Router } from 'express';
const router = Router()

router.get('/user', (req, res) => {res.status(200).json('Working')})

export default router