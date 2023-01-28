import { Routes, Route } from "react-router-dom";
import { ArtistGallery } from "../ArtistGallery";
import { Home } from "../Home/home";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ArtistGallery" element={<ArtistGallery />} />
    </Routes>
  );
};
