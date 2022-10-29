import express from 'express'
import morgan from 'morgan'
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
import cors from 'cors'

import { AuthRouter } from './routes/auth-routes.js'

const app = express()
dotenv.config()

mongoose.connect(process.env.MONGO_URL)
  .then((res) => console.log('Connect to DB'))
  .catch((error) => console.log(error))

app.listen(process.env.PORT, (error) => {
  error ? console.log(error) : console.log(`listening port ${process.env.PORT}`)
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

app.use(express.urlencoded(({ express: false })))

app.use(cors())

app.use(express.json())

app.use(AuthRouter)

app.use((req, res) => {
  res
    .status(404)
})