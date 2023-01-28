import { Router } from 'express';
import { PieceController } from '../controller/pieces.controller.js';
import { logged } from '../middleware/logged.js';
import { PieceRepository } from '../repository/piece.repository.js';
import { UserRepository } from '../repository/user.repository.js';

export const pieceRoutes = Router();
const controller = new PieceController(
    UserRepository.getInstance(),
    PieceRepository.getInstance()
);

pieceRoutes.get('/', controller.allPieces.bind(controller));
pieceRoutes.get('/:id', controller.onePiece.bind(controller));
pieceRoutes.get('/:key/:value', controller.query.bind(controller));
pieceRoutes.post('/', logged, controller.createPiece.bind(controller));
pieceRoutes.patch('/:id', controller.updatePiece.bind(controller));
