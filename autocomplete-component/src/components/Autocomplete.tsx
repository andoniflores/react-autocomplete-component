import "./Autocomplete.css";
import { useEffect, useState } from "react";

export default function Autocomplete({ data }: { data: Song[] }) {
  const [showSongList, setShowSongList] = useState<Display>("none");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredSongs, setFilteredSongs] = useState<Song[] | []>([]);
  const divDisplay = {
    display: showSongList,
  };
  useEffect(() => {
    filterSongs();
  }, [searchTerm]);

  function searchBarFocus() {
    setShowSongList("block");
  }
  function searchBarBlur() {
    setShowSongList("none");
  }
  function filterSongs() {
    let filterSongs = [];
    filterSongs = data.filter((song) =>
      song.songname.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setFilteredSongs(filterSongs);
  }
  function handleKeyUp(e: any) {
    setSearchTerm(e.target.value);
  }

  return (
    <div>
      <div>
        <input
          id="searchbar"
          type="search"
          onFocus={searchBarFocus}
          onBlur={searchBarBlur}
          onKeyUp={handleKeyUp}
        />
      </div>
      <div id="songlist" style={divDisplay}>
        <ul>
          {filteredSongs.map((song) => {
            return <li>{song.songname}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
