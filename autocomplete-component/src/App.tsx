import "./App.css";
import Autocomplete from "./components/Autocomplete";
import { getTracks } from "./api/tracks";
import { useEffect, useState } from "react";
import { authorize } from "./api/auth";

export default function App() {
  const [trackList, setTrackList] = useState<Track[]>();
  useEffect(() => {
    authorize().then((response) => {
      console.log(response);
      getTracks().then((tracks) => {
        setTrackList(tracks);
      });
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
