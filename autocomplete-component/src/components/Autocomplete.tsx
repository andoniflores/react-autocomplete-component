import "./Autocomplete.css";
import { useEffect, useState } from "react";

export default function Autocomplete({ data }: { data: Song[] }) {
  const [showSongList, setShowSongList] = useState<Display>("none");
  const divDisplay = {
    display: showSongList,
  };
  useEffect(() => {
    console.log(data);
  }, []);

  function searchBarFocus() {
    setShowSongList("block");
  }
  function searchBarBlur() {
    setShowSongList("none");
  }

  return (
    <div>
      <div>
        <input
          id="searchbar"
          type="search"
          onFocus={searchBarFocus}
          onBlur={searchBarBlur}
        />
      </div>
      <div id="songlist" style={divDisplay}>
        <ul>
          {data.map((song) => {
            return <li>{song.songname}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
