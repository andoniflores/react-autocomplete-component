import "./App.css";
import Autocomplete from "./components/Autocomplete";
import { getTracks } from "./api/tracks";
import { useEffect, useState } from "react";
import { authorize } from "./api/auth";

export default function App() {
  const [trackList, setTrackList] = useState<Track[]>();
  const [isValid, setIsValid] = useState<boolean>(true);
  useEffect(() => {
    authorize().then((response) => {
      if (!("error" in response)) {
        getTracks().then((tracks) => {
          setTrackList(tracks);
        });
      } else {
        setIsValid(false);
      }
    });
  }, []);
  return (
    <>
      <div className="my-div">
        {trackList ? <Autocomplete data={trackList} /> : null}
        {isValid ? null : (
          <div>
            Spotify Client is not valid, check Client ID and Client Secret
          </div>
        )}
      </div>
    </>
  );
}
