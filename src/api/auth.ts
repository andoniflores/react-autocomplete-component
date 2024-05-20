export async function authorize() {
  let token_expired_by = localStorage.getItem("expired_by");
  if (token_expired_by == null || parseInt(token_expired_by) < Date.now()) {
    return get_access_tokens();
  }
}
async function get_access_tokens() {
  let response: Response = await fetch(
    "https://accounts.spotify.com/api/token",
    {
      method: "POST",
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "client_credentials",
        client_id: import.meta.env.VITE_CLIENT_ID,
        client_secret: import.meta.env.VITE_CLIENT_SECRET,
      }),
    },
  );
  let resJSON: AuthResponse = await response.json();
  localStorage.setItem("access_token", resJSON.access_token);
  localStorage.setItem(
    "expired_by",
    (parseInt(resJSON.expires_in) * 1000 + Date.now()).toString(),
  );
  return resJSON;
}
