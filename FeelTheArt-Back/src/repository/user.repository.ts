import { User, UserModel } from '../entities/users.js';
import { Password } from '../utils/passwd/passwd.js';
import { UserRepo } from './repo.interface.js';

export class UserRepository implements UserRepo<User> {
    password = new Password();
    static instance: UserRepository;
    public static getInstance(): UserRepository {
        if (!UserRepository.instance) {
            UserRepository.instance = new UserRepository();
        }
        return UserRepository.instance;
    }
    #Model = UserModel;

    async post(data: Partial<User>): Promise<User> {
        if (typeof data.passwd !== 'string')
            throw new Error('Contraseña no valida');
        data.passwd = await this.password.encrypt(data.passwd);
        const result = (await this.#Model.create(data)).populate('artPieces');
        return result;
    }
    async find(data: Partial<User>): Promise<User> {
        const result = await this.#Model
            .findOne(data)
            .populate('wishPieces')
            .populate('artPieces');
        return result as User;
    }
    async update(id: string, data: Partial<User>): Promise<User> {
        const result = await this.#Model
            .findByIdAndUpdate(id, data, {
                new: true,
            })
            .populate('wishPieces');
        return result as User;
    }
    async delete(id: string): Promise<string> {
        await this.#Model.findByIdAndDelete(id);
        return id;
    }
    async query(key: string, value: string): Promise<Array<User>> {
        const result = await this.#Model
            .find({ [key]: value })
            .populate('wishPieces')
            .populate('artPieces');
        return result as User[];
    }
}
