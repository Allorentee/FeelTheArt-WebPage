import { Link } from "react-router-dom";
import { VerticalMenu } from "../../../core/utils/items.menu";
import style from "./menuHome.module.css";

export function MenuHome() {
  return (
    <>
      <ul className={style.menu}>
        {VerticalMenu.map((item) => (
          <li key={item.path} className={style.menu__item}>
            <Link to={item.path} className={style.menu__link}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
