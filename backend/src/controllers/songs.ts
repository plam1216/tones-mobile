import express, {Request, Response} from 'express'

const songRouter = express.Router()


// GET all Songs
songRouter.get('/playlist/:playlistid', async (req: Request, res: Response) => {
    try {
        res.send('Song Route GET')
    } catch (error) {
        res.status(400).json(error)
    }
})

// DELETE Song
songRouter.delete('/playlist/:playlistid/:id', async (req: Request, res: Response) => {
    try {
        res.send('Song Route DELETE')
    } catch (error) {
        res.status(400).json(error)
    }
})

// UPDATE Song
songRouter.post('/playlist/:playlistid/:id', async (req: Request, res: Response) => {
    try {
        res.send('Song Route UPDATE')
    } catch (error) {
        res.status(400).json(error)
    }
})

// CREATE Song
songRouter.post('/playlist/:playlistid', async (req: Request, res: Response) => {
    try {
        res.send('Song Route CREATE')
    } catch (error) {
        res.status(400).json(error)
    }
})

export default songRouter