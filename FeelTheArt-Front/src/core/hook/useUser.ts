import { useEffect, useState } from "react";
import { getAllArtist } from "../services/getArtist";
import { User } from "../types/user";

export const useUser = () => {
  const initialState: Array<User> = [];
  const [artist, setArtist] = useState(initialState);

  const handleArtistLoad = async () => {
    await getAllArtist().then(setArtist);
  };

  useEffect(() => {
    handleArtistLoad();
  }, []);

  return {
    artist,
    handleArtistLoad,
  };
};
