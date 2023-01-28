import { Router } from 'express';
import { UserController } from '../controller/user.controller.js';
import { logged } from '../middleware/logged.js';
import { PieceRepository } from '../repository/piece.repository.js';
import { UserRepository } from '../repository/user.repository.js';

export const usersRouter = Router();

const controller = new UserController(
    UserRepository.getInstance(),
    PieceRepository.getInstance()
);

usersRouter.post('/register', controller.register.bind(controller));
usersRouter.post('/login', controller.login.bind(controller));
usersRouter.get('/:key/:value', controller.getArtist.bind(controller));
usersRouter.delete('/', logged, controller.deleteAcc.bind(controller));
usersRouter.patch(
    '/addWishList',
    logged,
    controller.addWishList.bind(controller)
);
