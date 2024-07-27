import { Router } from 'express'
import TweetController from '../controllers/tweetController'

const router = Router()
const tweetController = new  TweetController

router.post('/tweet', (req, res) => tweetController.postTweet(req, res))
router.get('/tweet', (req, res) => tweetController.getTweets(req, res))
router.get('/tweet/:id', (req, res) => tweetController.getTweet(req, res))
router.put('/tweet/:id', (req, res) => tweetController.updateTweet(req, res))
router.delete('/tweet/:id', (req, res) => tweetController.deleteTweet(req, res))

export default router