import { authorize } from "./auth";

const top_50_global_id = "37i9dQZEVXbMDoHDwVN2tF";

export async function getTracks(): Promise<Track[]> {
  await authorize();
  return fetch(
    `https://api.spotify.com/v1/playlists/${top_50_global_id}/tracks?fields=items%28track%28name%2C+preview_url%2Cartists%28name%29%2Calbum%28images%28url%2Cwidth%2Cheight%29%29%29`,
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
  //let resJSON: ApiResponse = await response.json();
  //let data: Track[] = resJSON.items;
  //return data;
}
