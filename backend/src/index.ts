import express, {Request, Response} from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import playlistController from './controllers/playlists'
import songController from './controllers/songs'

const app = express()

const PORT = process.env.PORT || 4000

// MIDDLEWARE
dotenv.config()
app.use(cors())
app.use(express.json())


// DATABASE CONNECTION
mongoose
    .connect(process.env.MONGO_URI as string)
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.log(error))


// CONTROLLERS
app.use('/playlist', playlistController)
app.use('/', songController)


// TEST ROUTES
app.get('/', (req: Request, res: Response) => {
    res.send('GET is working')
})

app.listen(PORT, () => {
    console.log("Listening on PORT:", PORT)
})