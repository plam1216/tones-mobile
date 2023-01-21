import express, { Request, Response } from 'express'

const playlistRouter = express.Router()


// GET all Playlists
playlistRouter.get('/', async (req: Request, res: Response) => {
    try {
        res.send('Playlist Route GET')
    } catch (error) {
        res.status(400).json(error)
    }
})

// DELETE Playlist
playlistRouter.delete('/:id', async (req: Request, res: Response) => {
    try {
        res.send('Playlist Route DELETE')
    } catch (error) {
        res.status(400).json(error)
    }
})

// CREATE Playlist
playlistRouter.post('/', async (req: Request, res: Response) => {
    try {
        res.send('Playlist Route CREATE')
    } catch (error) {
        res.status(400).json(error)
    }
})

export default playlistRouter