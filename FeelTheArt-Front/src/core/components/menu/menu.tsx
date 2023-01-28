import { render } from "@testing-library/react";
import { Link } from "react-router-dom";

//Renderizado condicional pasandole por parametro el tipo de usuario que le llega ala hora de iniciar sesion, segun sea este parametro podremos renderizar uno de estos menus.
export const RenderMenu = () => {
  const menu = [
    { path: "/", label: "Home" },
    { path: "/ArtistGallery", label: "ArtistGallery" },
  ];
  return (
    <>
      <ul>
        {menu.map((item) => (
          <li key={item.path}>
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
