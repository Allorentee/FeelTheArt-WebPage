import { RenderMenu } from "../../core/components/menu/menu";
import { AllPieces } from "../../core/components/pieces/AllPieces";
import style from "./pieces.module.css";

export function Pieces() {
  return (
    <>
      <div className={style.wrapper}>
        <RenderMenu></RenderMenu>
        <AllPieces></AllPieces>
      </div>
    </>
  );
}
