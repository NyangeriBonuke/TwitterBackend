import express from 'express'
import dotenv from 'dotenv'
import userRoute from './routes/userRoute'
import tweetRout from './routes/tweetRoutes'

dotenv.config()
const app = express()

app.use(express.json())

app.use('/api', userRoute)
app.use('/api', tweetRout)

app.listen(process.env.PORT, () => {
    console.log('Server Started')
})