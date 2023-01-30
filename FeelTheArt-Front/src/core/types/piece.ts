import { User } from "./user";

export interface Pieces {
  name: string;
  img: string;
  artist: Artist;
  onSale: boolean;
  price: number;
  id: string;
}

export interface Artist {
  name: Name;
  surname: Surname;
  username: Username;
  email: Email;
  rol: Rol;
  wishPieces: string[];
  cart: any[];
  artPieces: string[];
  id: any;
  photo?: string;
}

export enum Email {
  AllorenteeGmailCOM = "Allorentee@gmail.com",
  JhonSkyGmailCOM = "JhonSky@gmail.com",
  SusanMorganGmailCOM = "SusanMorgan@gmail.com",
}

export enum ID {
  The63A374Ddc66A56A3De40F98F = "63a374ddc66a56a3de40f98f",
  The63A43C1995074B88C83Ec430 = "63a43c1995074b88c83ec430",
  The63A43D0D95074B88C83Ec436 = "63a43d0d95074b88c83ec436",
}

export enum Name {
  Alvaro = "Alvaro",
  Jhon = "Jhon",
  Susan = "Susan",
}

export enum Rol {
  Artist = "artist",
  Client = "client",
}

export enum Surname {
  Llorente = "Llorente",
  Morgan = "Morgan",
  Sky = "Sky",
}

export enum Username {
  Allorentee = "Allorentee",
  Jhsky = "JHSKY",
  Ssnmrg = "SSNMRG",
}
