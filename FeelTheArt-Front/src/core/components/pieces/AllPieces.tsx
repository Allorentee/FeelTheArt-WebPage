import { useEffect, useState } from "react";
import { getAllPieces } from "../../services/pieces/getAllPieces";
import { Pieces } from "../../types/piece";
import style from "./allpieces.module.css";

export function AllPieces() {
  const initialState: Pieces[] = [];
  const [pieces, setPieces] = useState(initialState);

  useEffect(() => {
    getAllPieces().then(setPieces);
  }, []);

  return (
    <>
      <ul className={style.pieceList}>
        {pieces.length > 0 &&
          pieces.map((piece) => (
            <li key={piece.name} className={style.pieceList__Item}>
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
