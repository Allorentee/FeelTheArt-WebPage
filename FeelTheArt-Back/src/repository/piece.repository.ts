import { Piece, PieceModel } from '../entities/art.pieces.js';
import { PieceRepo } from './repo.interface.js';

export class PieceRepository implements PieceRepo<Piece> {
    static instance: PieceRepository;
    public static getInstance(): PieceRepository {
        if (!PieceRepository.instance) {
            PieceRepository.instance = new PieceRepository();
        }
        return PieceRepository.instance;
    }
    #Model = PieceModel;

    async getAll(): Promise<Array<Piece>> {
        const result = await this.#Model.find().populate('artist');
        return result;
    }
    async query(key: string, value: string): Promise<Array<Piece>> {
        const result = await this.#Model
            .find({ [key]: value })
            .populate('artist');
        return result;
    }
    async getOne(id: string): Promise<Piece> {
        const piece = await this.#Model.findById(id).populate('artist');
        return piece as Piece;
    }
    async post(data: Partial<Piece>): Promise<Piece> {
        const result = (await this.#Model.create(data)).populate('artist');
        return result;
    }
    async delete(id: string): Promise<string> {
        await this.#Model.findByIdAndDelete(id);
        return id;
    }
    async update(id: string, data: Partial<Piece>): Promise<Piece> {
        const result = await this.#Model.findByIdAndUpdate(id, data, {
            new: true,
        });
        return result as Piece;
    }
}
