import { MenuHome } from "./components/MenuHome";
import style from "./home.module.css";

export const Home = () => {
  return (
    <>
      <div>
        <MenuHome></MenuHome>
        <div className={style.home__wrapper}>
          <img
            src="/assets/img/face-right.png"
            width="280px"
            alt="face-right"
          />
          <div>
            <h1 className={style.home__title}>FEEL THE ART</h1>
            <h2 className={style.home__title2}>Working in progress</h2>
          </div>
          <img src="/assets/img/face-left.png" width="280px" alt="face-left" />
        </div>
      </div>
    </>
  );
};
