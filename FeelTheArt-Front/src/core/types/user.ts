export type User = {
  name: string;
  surname: string;
  username: string;
  passwd: string;
  email: string;
  rol: string;
  balance?: number;
  photo?: string;
  artPieces?: [];
  wishPieces: [];
  cart: [];
};
