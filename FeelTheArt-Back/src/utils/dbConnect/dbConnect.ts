import mongoose from 'mongoose';
import { MONGO_URL } from '../../config.js';

export async function dbConnect() {
    mongoose.set('strictQuery', true);
    const DBName =
        process.env.NODE_ENV !== 'test' ? 'FeelTheArt' : 'FeelTheArtTest';
    const uri = MONGO_URL + DBName;
    return mongoose.connect(uri);
}
