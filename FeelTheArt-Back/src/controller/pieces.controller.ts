import { Piece } from '../entities/art.pieces.js';
import { User } from '../entities/users';
import { NextFunction, Request, Response } from 'express';
import { PieceRepo, UserRepo } from '../repository/repo.interface';
import { ExtraReq } from './extra.Interface';

export class PieceController {
    constructor(
        public readonly UserRepository: UserRepo<User>,
        public readonly PieceRepository: PieceRepo<Piece>
    ) {}

    async allPieces(req: Request, resp: Response, next: NextFunction) {
        try {
            const artPieces = await this.PieceRepository.getAll();

            resp.status(200);
            resp.json(artPieces);
        } catch (error) {
            next(error);
        }
    }

    async onePiece(req: Request, resp: Response, next: NextFunction) {
        try {
            const piece = await this.PieceRepository.getOne(req.params.id);
            resp.status(200);
            resp.json(piece);
        } catch (error) {
            next(error);
        }
    }

    async query(req: Request, resp: Response, next: NextFunction) {
        try {
            const artPieces = await this.PieceRepository.query(
                req.params.key,
                req.params.value
            );
            resp.status(200);
            resp.json(artPieces);
        } catch (error) {
            next(error);
        }
    }

    async createPiece(req: ExtraReq, resp: Response, next: NextFunction) {
        try {
            console.log(req.payload);
            if (!req.payload) throw new Error('Invalid payload');
            const user = await this.UserRepository.find({
                username: req.payload.username,
            });
            req.body.artist = user;

            const piece = await this.PieceRepository.post(req.body);

            user.artPieces?.push(piece.id);
            await this.UserRepository.update(user.id.toString(), {
                artPieces: user.artPieces,
            });

            resp.status(200);
            resp.json(piece);
        } catch (error) {
            next(error);
        }
    }

    async updatePiece(req: ExtraReq, resp: Response, next: NextFunction) {
        try {
            const piece = await this.PieceRepository.update(
                req.params.id,
                req.body
            );
            console.log(req.params.id);
            resp.status(200);
            resp.json(piece);
        } catch (error) {
            next(error);
        }
    }
}
