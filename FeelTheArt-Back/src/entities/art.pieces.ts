import { model, ObjectId, Schema, Types } from 'mongoose';

export type Piece = {
    id: Types.ObjectId;
    name: string;
    img: string;
    artist: ObjectId;
    onSale: boolean;
    price: number;
    likes?: number;
};

export const pieceSchema = new Schema<Piece>({
    name: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    artist: {
        type: Types.ObjectId,
        name: String,
        ref: 'User',
    },
    onSale: {
        type: Boolean,
    },
    price: {
        type: Number,
    },
    likes: {
        type: Number,
    },
});

pieceSchema.set('toJSON', {
    transform: (_document, returnedObject) => {
        returnedObject.id = returnedObject._id;
        delete returnedObject.__v;
        delete returnedObject._id;
    },
});

export const PieceModel = model<Piece>('Piece', pieceSchema, 'pieces');
