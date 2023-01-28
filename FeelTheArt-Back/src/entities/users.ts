import { model, Schema, Types } from 'mongoose';

export type User = {
    id: Types.ObjectId;
    name: string;
    surname: string;
    username: string;
    passwd: string;
    email: string;
    rol: string;
    balance?: number;
    photo?: string;
    artPieces?: Array<Types.ObjectId>;
    wishPieces: Array<Types.ObjectId>;
    cart: Array<Types.ObjectId>;
};

export const userSchema = new Schema<User>({
    name: {
        type: String,
        requied: true,
    },
    surname: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    rol: {
        type: String,
        required: true,
    },
    balance: {
        type: Number,
    },
    photo: {
        type: String,
    },
    passwd: {
        type: String,
    },
    wishPieces: [
        {
            type: Types.ObjectId,
            name: String,
            artist: Types.ObjectId,
            onSale: Boolean,
            price: Number,
            ref: 'Piece',
        },
    ],
    artPieces: [
        {
            type: Types.ObjectId,
            name: String,
            artist: Types.ObjectId,
            onSale: Boolean,
            price: Number,
            ref: 'Piece',
        },
    ],
    cart: [
        {
            type: Types.ObjectId,
            name: String,
            price: Number,
            ref: 'Piece',
        },
    ],
});

userSchema.set('toJSON', {
    transform: (_document, returnedObject) => {
        returnedObject.id = returnedObject._id;
        delete returnedObject.__v;
        delete returnedObject._id;
        delete returnedObject.passwd;
    },
});

export const UserModel = model<User>('User', userSchema, 'users');
