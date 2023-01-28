import { NextFunction, Response } from 'express';
import { ExtraReq } from '../controller/extra.Interface.js';
import { Token } from '../utils/token/token.js';

export const logged = (req: ExtraReq, res: Response, next: NextFunction) => {
    const tokenOp = new Token();

    const authString = req.get('Authorization');
    if (!authString || !authString?.startsWith('Bearer')) {
        next('Usuario o contraseña Incorrecto');
    }
    try {
        const token = (authString as string).slice(7);
        req.payload = tokenOp.readToken(token);
        next();
    } catch (error) {
        next(error);
    }
};
