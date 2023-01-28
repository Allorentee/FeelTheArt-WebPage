import { User } from "./user";

export type Piece = {
  name: string;
  img: string;
  artist: User;
  onSale: boolean;
  price: number;
  likes?: number;
};
