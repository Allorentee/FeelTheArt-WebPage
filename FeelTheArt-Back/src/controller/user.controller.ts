import debug from 'debug';
import { NextFunction, Request, Response } from 'express';
import { Piece } from '../entities/art.pieces.js';
import { User } from '../entities/users.js';
import { ErrorUserController } from '../error/error.management.js';
import { PieceRepo, UserRepo } from '../repository/repo.interface.js';
import { Token } from '../utils/token/token.js';
import { ExtraReq } from './extra.Interface.js';

export class UserController {
    errors = new ErrorUserController();
    tokenOptions = new Token();
    constructor(
        public readonly UserRepository: UserRepo<User>,
        public readonly PieceRepository: PieceRepo<Piece>
    ) {}

    async register(req: Request, resp: Response, next: NextFunction) {
        try {
            const user = await this.UserRepository.post(req.body);
            resp.status(201);
            resp.json(user);
        } catch (error) {
            next(this.errors.loginControl(error as Error));
        }
    }

    async login(req: Request, resp: Response, next: NextFunction) {
        try {
            const user = await this.UserRepository.find({
                username: req.body.username,
            });
            const payload = {
                id: user.id.toString(),
                username: user.username,
                rol: user.rol,
            };
            const token = this.tokenOptions.createToken(payload);
            resp.status(200);
            resp.json({ user, token });
        } catch (error) {
            next(this.errors.loginControl(error as Error));
        }
    }

    async getArtist(req: Request, resp: Response, next: NextFunction) {
        try {
            const artist = await this.UserRepository.query(
                req.params.key,
                req.params.value
            );
            resp.status(200);
            resp.json(artist);
        } catch (error) {
            next(error);
        }
    }

    async deleteAcc(req: ExtraReq, resp: Response, next: NextFunction) {
        try {
            if (!req.payload) throw new Error('Invalid Payload');
            const user = await this.UserRepository.find({
                username: req.payload.username,
            });
            console.log(user);
            await this.UserRepository.delete(user.id.toString());
            resp.status(200);
            resp.json({});
        } catch (error) {
            next(error);
        }
    }

    async addWishList(req: ExtraReq, resp: Response, next: NextFunction) {
        try {
            console.log('prueba');
            if (!req.payload) throw new Error('Invalid Payload');
            const user = await this.UserRepository.find({ id: req.payload.id });
            console.log(user);
            const piece = await this.PieceRepository.getOne(req.body.id);
            console.log(piece);

            if (user.wishPieces.includes(piece.id))
                throw new Error('Piece already in wishList');
            user.wishPieces.push(piece.id);

            await this.UserRepository.update(user.id.toString(), {
                wishPieces: user.wishPieces,
            });
            resp.status(200);
            resp.json(user);
        } catch (error) {
            next(error);
        }
    }

    async delWishList(req: ExtraReq, resp: Response, next: NextFunction) {
        try {
            if (!req.payload) throw new Error('Invalid Payload');
            const user = await this.UserRepository.find({ id: req.payload.id });
            const piece = await this.PieceRepository.getOne(req.body.id);

            const updatedWishList = user.wishPieces.filter(
                (item) => item.toString() !== piece.id.toString()
            );

            await this.UserRepository.update(user.id.toString(), {
                wishPieces: updatedWishList,
            });
            resp.status(200);
            resp.json(piece);
        } catch (error) {
            next(error);
        }
    }
}
