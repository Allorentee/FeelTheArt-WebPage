import { Pieces } from "../../types/piece";

export function getAllPieces(): Promise<Pieces[]> {
  return fetch("http://localhost:7700/pieces").then((res) => res.json());
}
