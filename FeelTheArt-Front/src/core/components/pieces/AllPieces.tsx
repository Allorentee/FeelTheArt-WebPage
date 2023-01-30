import { useEffect, useState } from "react";
import { getAllPieces } from "../../services/pieces/getAllPieces";
import { Piece } from "../../types/piece";

export function AllPieces() {
  const initialState: Piece[] = [];
  const [pieces, setPieces] = useState(initialState);

  useEffect(() => {
    getAllPieces().then(setPieces);
  }, []);

  return (
    <>
      <ul>
        {pieces.length > 0 &&
          pieces.map((piece) => (
            <li key={piece.name}>
              <img
                src={piece.img}
                alt={piece.name}
                width={200}
                height={"auto"}
              />
              <p>{piece.name}</p>
            </li>
          ))}
      </ul>
    </>
  );
}
