import * as dotenv from 'dotenv';
dotenv.config();

export const USER = process.env.USER;
export const PASSWD = process.env.PASSWD;
export const CLUSTER = process.env.CLUSTER;
export const PORT = process.env.PORT;
export const SECRET = process.env.SECRET;
export const MONGO_URL = process.env.MONGO_URL;
