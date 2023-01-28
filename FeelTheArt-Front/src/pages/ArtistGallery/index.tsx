import { RenderMenu } from "../../core/components/menu/menu";
import { useUser } from "../../core/hook/useUser";

export function ArtistGallery() {
  const { artist } = useUser();

  return (
    <>
      <RenderMenu></RenderMenu>
      <h1 className="text-amber-400 absolute top-16 text-8xl">
        ARTIST GALLERY
      </h1>
      <ul className="flex justify-center items-center gap-10">
        {artist.map((art) => (
          <li key={art.name} className="h-96 w-64 min-w-min">
            <img
              src={art.photo}
              className="h-96 w-64 max-w-min object-cover"
              alt={art.name}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
