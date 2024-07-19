import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import RefferalRoute from './routes/refferal.route.js'
dotenv.config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json())

app.use(RefferalRoute)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})

export default app