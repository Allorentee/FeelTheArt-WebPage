import { Piece } from "./../../../../../FeelTheArt-Back/src/entities/art.pieces";
export function getAllPieces(): Promise<Piece[]> {
  return fetch("http://localhost:7700/pieces").then((res) => res.json());
}
