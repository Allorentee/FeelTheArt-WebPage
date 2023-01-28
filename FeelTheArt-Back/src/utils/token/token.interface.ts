import jwt from 'jsonwebtoken';
export interface TokenPayload {
    id: string;
    username: string;
    rol: string;
}

export interface TokenClass {
    getSecret: (secret: string) => string;
    createToken: (payload: TokenPayload) => string;
    readToken: (token: string) => jwt.JwtPayload;
}
