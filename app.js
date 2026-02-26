import express from 'express'
import bodyParser from 'body-parser'
const app = express()
import movieRouter from './routes/movie.route.js'
import userRouter from './routes/user.route.js'


//Middlewares
// app.use(express.json())
app.use(bodyParser.json())



app.use("/api/v1/movies", movieRouter)
app.use('/api/v1/users', userRouter)



export default app


















