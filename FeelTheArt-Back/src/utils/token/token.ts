import jwt from 'jsonwebtoken';
import { SECRET } from '../../config.js';
import { TokenClass, TokenPayload } from './token.interface.js';

export class Token implements TokenClass {
    getSecret(secret = SECRET) {
        if (typeof secret !== 'string' || secret === null || secret === '') {
            throw new Error('Invalid secret to give token');
        }
        return secret;
    }

    createToken(payload: TokenPayload) {
        return jwt.sign(payload, this.getSecret());
    }
    readToken(token: string) {
        const payload = jwt.verify(token, this.getSecret());
        return payload as jwt.JwtPayload;
    }
}
