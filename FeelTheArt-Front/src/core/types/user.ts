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
// Generated by https://quicktype.io

export interface Artist {
  name: string;
  surname: string;
  username: string;
  email: string;
  rol: string;
  photo: string;
  wishPieces: any[];
  artPieces: ArtPiece[];
  cart: any[];
  id: string;
}

export interface ArtPiece {
  name: string;
  img: string;
  artist: ArtistEnum;
  onSale: boolean;
  price: number;
  id: string;
}

export enum ArtistEnum {
  The63A43C1995074B88C83Ec430 = "63a43c1995074b88c83ec430",
  The63A43D0D95074B88C83Ec436 = "63a43d0d95074b88c83ec436",
}
