import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'

const prisma = new PrismaClient()

class UserController{
    async getUsers(req: Request, res: Response){
        try{
            const allUsers = await prisma.user.findMany()
            res.status(200).json(allUsers)
        }
        catch(error){
            res.status(500).json(error)
        }
    }

    async getUser(req: Request, res: Response){
        try{
            const { id } = req.params
            const user = await prisma.user.findUnique({ where: { id: Number(id) } })
            res.status(200).json(user)
        }
        catch(error){
            res.status(500).json(error)
        }
    }

    async createUser(req: Request, res: Response){
        try{
            const { email, name, userName } = req.body
            const newUser = await prisma.user.create({
                data: {email, name, userName}
            })
            res.status(200).json(newUser)
        }
        catch(error){
            res.status(500).json(error)
        }
    }

    async updateUser(req: Request, res: Response){
        try{
            const { id } = req.params
            const { name, userName, image, bio}  = req.body
            const updatedUser = await prisma.user.update({
                where: {id: Number(id)},
                data: {name, userName, image, bio}
            })
            res.status(200).json(updatedUser)
        }
        catch(error){
            res.status(500).json(error)
        }
    }

    async deleteUser(req: Request, res: Response){
        try{
            const { id } = req.params
            const deletedUser = await prisma.user.delete({ where: { id: Number(id) } })
            res.status(200).json(deletedUser)
        }
        catch(error){
            res.status(500).json(error)
        }
    }
}

export default UserController