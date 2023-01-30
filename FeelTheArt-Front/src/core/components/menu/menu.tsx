import { Link } from "react-router-dom";
import style from "./menu.module.css";

//Renderizado condicional pasandole por parametro el tipo de usuario que le llega ala hora de iniciar sesion, segun sea este parametro podremos renderizar uno de estos menus.
export const RenderMenu = ({ isHome }: { isHome: boolean }) => {
  const menu = [
    {
      path: "/",
      label: "../../../../public/assets/icon/IconHome.svg",
      name: "Home",
    },
    {
      path: "/ArtistGallery",
      label: "../../../../public/assets/icon/IconArtist.svg",
      name: "Artist",
    },
    {
      path: "/trendingPieces",
      label: "../../../../public/assets/icon/IconGallery.svg",
      name: "Trending Pieces",
    },
    {
      path: "/shopingCart",
      label: "../../../../public/assets/icon/IconShoppingCart.svg",
      name: "Shopping Cart",
    },
    {
      path: "/profile",
      label: "../../../../public/assets/icon/IconProfile.svg",
      name: "profile",
    },
  ];
  return (
    <>
      <ul className={style.menu}>
        {menu.map((item) => (
          <li key={item.path} className={style.menu__item}>
            {isHome ? (
              <Link to={item.path} className={style.menu__link}>
                {item.name}
              </Link>
            ) : (
              <Link to={item.path} className={style.menu__link}>
                <img src={item.label} alt="icon-menu" />
              </Link>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};
