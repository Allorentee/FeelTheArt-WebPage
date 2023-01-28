import { useEffect, useState } from "react";
import { getAllArtist } from "../services/getArtist";
import { User } from "../types/user";

export const useUser = () => {
  const initialState: Array<User> = [];
  const [artist, setstate] = useState(initialState);

  const handleArtistLoad = async () => {
    await getAllArtist().then((res) => {
      setstate(res);
    });
  };

  useEffect(() => {
    handleArtistLoad();
  }, []);

  return {
    artist,
    handleArtistLoad,
  };
};
