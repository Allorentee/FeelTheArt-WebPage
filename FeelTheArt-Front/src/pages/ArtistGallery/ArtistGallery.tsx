import { RenderMenu } from "../../core/components/menu/menu";
import { TitlePage } from "../../core/components/titlePage/TittlePage";
import { useUser } from "../../core/hook/useUser";
import style from "./artistGallery.module.css";

export function ArtistGallery() {
  const { artist } = useUser();

  return (
    <>
      <div className={style.divider}>
        <TitlePage title="ARTIST GALLERY"></TitlePage>
        <main className={style.wrapper}>
          <RenderMenu></RenderMenu>
          <div className={style.ArtistGallery__wrapper}>
            <ul className={style.ArtistGallery__List}>
              {artist.map((art) => (
                <li key={art.name} className={style.ArtistGallery__ArtistCard}>
                  <img
                    src={art.photo}
                    className={style.ArtistGallery__photo}
                    alt={art.name}
                    width={235}
                    height={364}
                  />
                </li>
              ))}
            </ul>
          </div>
        </main>
      </div>
    </>
  );
}
