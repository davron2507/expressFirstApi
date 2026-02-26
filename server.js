import env from 'dotenv'
env.config()
import app from './app.js'
const port = process.env.PORT || 3000

app.listen(port,()=>{
    console.log(`example app listenin on port ${port}`)
})