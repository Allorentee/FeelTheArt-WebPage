import { Link } from "react-router-dom";
import { Loading } from "../../core/components/Loading/Loading";
import { RenderMenu } from "../../core/components/menu/menu";
import { TitlePage } from "../../core/components/titlePage/TittlePage";
import { useUser } from "../../core/hook/useUser";
import style from "./artistGallery.module.css";

export function ArtistGallery() {
  const { artist, loading } = useUser(true);

  return (
    <>
      {loading ? (
        <Loading></Loading>
      ) : (
        <div className={style.divider}>
          <div className={style.ArtistGallery__title}>
            <TitlePage title="ARTIST GALLERY"></TitlePage>
          </div>
          <main className={style.wrapper}>
            <div className={style.menu__Wrapper}>
              <RenderMenu></RenderMenu>
            </div>
            <div className={style.ArtistGallery__wrapper}>
              <ul className={style.ArtistGallery__List}>
                {artist.map((art) => (
                  <Link to={`/artist/${art.name}`} key={art.name}>
                    <li className={style.ArtistGallery__ArtistCard}>
                      <img
                        src={art.photo}
                        className={style.ArtistGallery__photo}
                        alt={art.name}
                        width={235}
                        height={364}
                      />
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </main>
        </div>
      )}
    </>
  );
}
