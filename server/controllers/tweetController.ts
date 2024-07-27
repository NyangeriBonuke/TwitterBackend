import { Prisma, PrismaClient } from '@prisma/client'
import { Request, Response } from "express"

const prisma = new PrismaClient()

class TweetController{
    async postTweet(req: Request, res: Response){
        const { content, image, userId } = req.body
        try{
            const result = await prisma.tweet.create({
                data: {content, image, userId}
            })
            res.status(200).json(result)
        }
        catch(error){
            res.status(500).json(error)
        }
    }

    async getTweets(req: Request, res: Response){
        try{
            const result = await prisma.tweet.findMany({include: {user: {select: {id: true, name: true, userName: true, image: true, email: true}}}})
            res.status(200).json(result)
        }
        catch(error){
            res.status(500).json(error)
        }
    }

    async getTweet(req: Request, res: Response){
        const { id } = req.params
        try{
            const result = await prisma.tweet.findUnique({ where: { id: Number(id) } })
            if(!result){
                return res.status(404).json('Tweet not found')
            }
            res.status(200).json(result)
        }
        catch(error){
            res.status(500).json(error)
        }
    }

    async updateTweet(req: Request, res: Response){
        const { content, image} = req.body
        const { id } = req.params
        try{
            const result = await prisma.tweet.update({
                where: {id: Number(id)},
                data: {content, image}
            })
            res.status(200).json(result)
        }
        catch(error){
            res.status(500).json(error)
        }
    }

    async deleteTweet(req: Request, res: Response){
        const { id } = req.params
        try{
            const result = await prisma.tweet.delete({where: {id: Number(id)}})
            res.status(200).json(result)
        }
        catch(error){
            res.status(500).json(error)
        }
    }
}

export default TweetController