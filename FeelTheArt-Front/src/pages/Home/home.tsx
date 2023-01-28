import "./../../index.css";
import { Link } from "react-router-dom";
import { RenderMenu } from "../../core/components/menu/menu";

export const Home = () => {
  return (
    <>
      <RenderMenu></RenderMenu>
      <div className="flex justify-center items-center flex-row ">
        <img src="/assets/img/face-right.png" width="280px" alt="face-right" />
        <h1 className="text-5xl text-amber-500 m-10 ">FEEL THE ART</h1>
        <img src="/assets/img/face-left.png" width="280px" alt="face-left" />
      </div>
    </>
  );
};
