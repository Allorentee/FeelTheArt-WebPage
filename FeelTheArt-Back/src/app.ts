import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import { setCors } from './middleware/cors.js';
import { usersRouter } from './routes/user.routes.js';
import { pieceRoutes } from './routes/pieces.routes.js';

export const app = express();
app.disable('x-powered-by');

const corsOptions = {
    origin: '*',
};
app.use(morgan('dev'));
app.use(cors(corsOptions));
app.use(express.json());

app.use(setCors);
app.get('/', (_req, res) => {
    res.send('API Express / pieces or users').end();
});
app.use('/users', usersRouter);
app.use('/pieces', pieceRoutes);
