const TOP50GLOBALID = "37i9dQZEVXbMDoHDwVN2tF";

export async function getTracks(): Promise<Track[]> {
  return fetch(
    `https://api.spotify.com/v1/playlists/${TOP50GLOBALID}/tracks?fields=items%28track%28name%2C+preview_url%2Cartists%28name%29%2Calbum%28images%28url%2Cwidth%2Cheight%29%29%29`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    },
  )
    .then((res) => res.json())
    .then((res) => {
      return res.items as Track[];
    });
}
