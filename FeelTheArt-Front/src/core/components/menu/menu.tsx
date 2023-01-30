import { Link } from "react-router-dom";
import { VerticalMenu } from "../../utils/items.menu";
import style from "./menu.module.css";

//Renderizado condicional pasandole por parametro el tipo de usuario que le llega ala hora de iniciar sesion, segun sea este parametro podremos renderizar uno de estos menus.
export const RenderMenu = () => {
  return (
    <>
      <ul className={style.menu}>
        {VerticalMenu.map((item) => (
          <li key={item.path} className={style.menu__item}>
            <Link to={item.path} className={style.menu__link}>
              <img src={item.label} alt="icon-menu" />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
