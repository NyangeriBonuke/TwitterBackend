import { Router } from 'express'
import UserController from '../controllers/userController'

const router = Router()
const userController = new UserController

router.get('/user', (req, res) => userController.getUsers(req, res))
router.get('/user/:id', (req, res) => userController.getUser(req, res))
router.post('/user', (req, res) => userController.createUser(req, res))
router.put('/user/:id', (req, res) => userController.updateUser(req, res))
router.delete('/user/:id', (req, res) => userController.deleteUser(req, res))

export default router