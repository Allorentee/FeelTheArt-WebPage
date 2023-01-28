const URL = "http://localhost:7700/";

export async function getAllArtist() {
  const url = URL + "users/rol/artist";
  return fetch(url).then((response) => response.json());
}
