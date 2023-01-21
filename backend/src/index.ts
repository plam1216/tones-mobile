import express, {Request, Response} from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

const app = express()

const PORT = process.env.PORT || 4000

dotenv.config()
app.use(cors())
app.use(express.json())

mongoose
    .connect(process.env.MONGO_URI as string)
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.log(error))


app.get('/', (req: Request, res: Response) => {
    res.send('GET is working')
})

app.listen(PORT, () => {
    console.log("Listening on PORT:", PORT)
})