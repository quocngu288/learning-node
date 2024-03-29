import express from 'express'
import { tweetRouter } from './tweet.routes'
import { userRouter } from './users.routes'
import { mediasRouter } from './medias.routes'
import { staticRouter } from './static.routes'

export const mainRouter = express.Router()

mainRouter.use('/tweet', tweetRouter)
mainRouter.use('/users', userRouter)
mainRouter.use('/medias', mediasRouter)
mainRouter.use('/static', staticRouter)
