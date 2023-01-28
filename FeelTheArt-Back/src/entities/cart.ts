import { model, Schema, Types } from 'mongoose';

export type Cart = {
    orderID: Types.ObjectId;
    propietary?: Types.ObjectId;
    artPieces: Array<Types.ObjectId>;
    price: number;
};

export const cartSchema = new Schema<Cart>({
    propietary: {
        type: Types.ObjectId,
        name: String,
        ref: 'User',
    },
    artPieces: [
        {
            type: Schema.Types.ObjectId,
            name: String,
            ref: 'Piece',
        },
    ],
    price: {
        type: Number,
    },
});

cartSchema.set('toJSON', {
    transform: (_document, returnedObject) => {
        returnedObject.id = returnedObject._id;
        delete returnedObject.__v;
        delete returnedObject._id;
    },
});

export const CartModel = model<Cart>('Cart', cartSchema, 'carts');
