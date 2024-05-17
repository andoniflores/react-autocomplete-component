interface AuthResponse {
  access_token: string;
  token_type: string;
  expires_in: string;
}
interface TrackDetails {
  album: Album;
  artists: Artist[];
  name: string;
  preview_url: string;
}
interface Album {
  images: Image[];
}
interface Image {
  url: string;
  height: number;
  width: number;
}
interface Artist {
  name: string;
}
interface ApiResponse {
  items: Track[];
}
interface Track {
  track: TrackDetails;
}
interface TrackCardProps {
  data: TrackDetails;
  searchTerm: string;
}
