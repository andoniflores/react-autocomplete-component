export async function authorize() {
  let tokenExpiredBy = localStorage.getItem("expired_by");
  if (tokenExpiredBy == null || parseInt(tokenExpiredBy) < Date.now()) {
    return getAccessTokens();
  }
  return { status: "ok" };
}
async function getAccessTokens() {
  let response: Response = await fetch(
    "https://accounts.spotify.com/api/token",
    {
      method: "POST",
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "client_credentials",
        client_id: import.meta.env.VITE_SPOTIFY_CLIENT_ID,
        client_secret: import.meta.env.VITE_SPOTIFY_CLIENT_SECRET,
      }),
    },
  );
  let resJSON: AuthResponse = await response.json();
  console.log("resJSON");
  console.log(resJSON);
  if (!("error" in resJSON)) {
    localStorage.setItem("access_token", resJSON.access_token);
    localStorage.setItem(
      "expired_by",
      (parseInt(resJSON.expires_in) * 1000 + Date.now()).toString(),
    );
  }
  return resJSON;
}
