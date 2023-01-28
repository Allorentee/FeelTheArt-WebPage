import { Request } from 'express';
import { JwtPayload } from 'jsonwebtoken';

export interface ExtraReq extends Request {
    payload?: JwtPayload;
}
