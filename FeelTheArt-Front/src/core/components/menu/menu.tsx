import { Link } from "react-router-dom";
import style from "./menu.module.css";

//Renderizado condicional pasandole por parametro el tipo de usuario que le llega ala hora de iniciar sesion, segun sea este parametro podremos renderizar uno de estos menus.
export const RenderMenu = () => {
  const menu = [
    { path: "/", label: "../../../../public/assets/icon/IconHome.svg" },
    {
      path: "/ArtistGallery",
      label: "../../../../public/assets/icon/IconArtist.svg",
    },
    {
      path: "/trendingPieces",
      label: "../../../../public/assets/icon/IconGallery.svg",
    },
    {
      path: "/shopingCart",
      label: "../../../../public/assets/icon/IconShoppingCart.svg",
    },
    {
      path: "/profile",
      label: "../../../../public/assets/icon/IconProfile.svg",
    },
  ];
  return (
    <>
      <ul className={style.menu}>
        {menu.map((item) => (
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
