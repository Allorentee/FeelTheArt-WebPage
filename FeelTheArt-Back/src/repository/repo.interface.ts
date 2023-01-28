import { Cart } from '../entities/cart.js';
import { User } from '../entities/users.js';

export interface UserRepo<T> {
    post: (data: Partial<User>) => Promise<User>;
    delete: (id: string) => Promise<string>;
    find: (data: Partial<User>) => Promise<User>;
    update: (id: string, data: Partial<T>) => Promise<T>;
    query: (key: string, value: string) => Promise<Array<User>>;
}

export interface PieceRepo<Piece> {
    getAll: () => Promise<Array<Piece>>;
    getOne: (id: string) => Promise<Piece>;
    post: (data: Partial<Piece>) => Promise<Piece>;
    query: (key: string, value: string) => Promise<Array<Piece>>;
    delete: (id: string) => Promise<string>;
    update: (id: string, data: Partial<Piece>) => Promise<Piece>;
}

export interface OrderRepo<T> {
    find: (data: Partial<Cart>) => Promise<Array<Cart>>;
    post: (data: Partial<Cart>) => Promise<Cart>;
    delete: (userId: string, itemId: string) => Promise<T>;
    patch: (userId: string, itemId: string, data: Partial<T>) => Promise<T>;
}
