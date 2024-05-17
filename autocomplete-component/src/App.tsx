import "./App.css";
import Autocomplete from "./components/Autocomplete";
import { getTracks } from "./api/tracks";
import { useEffect, useState } from "react";

export default function App() {
  const [trackList, setTrackList] = useState<Track[]>();
  useEffect(() => {
    getTracks().then((tracks) => {
      setTrackList(tracks);
    });
  }, []);
  return (
    <>
      <div className="my-div">
        {trackList ? <Autocomplete data={trackList} /> : null}
      </div>
    </>
  );
}
