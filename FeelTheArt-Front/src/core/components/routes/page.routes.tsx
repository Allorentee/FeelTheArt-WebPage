import { Routes, Route } from "react-router-dom";
import { ArtistGallery } from "../../../pages/ArtistGallery/ArtistGallery";
import { Home } from "../../../pages/Home/home";
import { Pieces } from "../../../pages/TrendingPieces/Pieces";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/artistGallery" element={<ArtistGallery />} />
      <Route path="/artist/:name" />
      <Route path="/artist/:name/pieces"></Route>
      <Route path="/trendingPieces" element={<Pieces></Pieces>} />
      <Route path="/profile" element={<Home />}></Route>
    </Routes>
  );
};
