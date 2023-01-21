import mongoose, { Document, Schema } from 'mongoose'

interface Song {
    name: string,
    file: string,
    artwork: string,
}

interface Playlist {
    genre: string,
    playlist: Song[],
}

const songSchema = new Schema({
    name: { type: String, required: true },
    file: { type: String, required: true },
    artwork: { type: String, required: true },
},
    {
        timestamps: true,
    },
)

const playlistSchema = new Schema({
    genre: String,
    playlist: [songSchema]
},
    {
        timestamps: true,
    },
)

export default mongoose.model<Playlist>('Playlist', playlistSchema)