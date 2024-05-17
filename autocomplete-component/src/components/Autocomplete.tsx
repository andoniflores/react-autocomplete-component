import "./Autocomplete.css";
import { useEffect, useState } from "react";

export default function Autocomplete({ data }: { data: Track[] }) {
  const [showTrackList, setShowTrackList] = useState<Display>("none");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredTracks, setFilteredTracks] = useState<Track[] | []>([]);
  const divDisplay = {
    display: showTrackList,
  };
  useEffect(() => {
    filterTracks();
  }, [searchTerm]);

  function searchBarFocus() {
    setShowTrackList("block");
  }
  function searchBarBlur() {
    setShowTrackList("none");
  }
  function filterTracks() {
    let filterTracks = [];
    filterTracks = data.filter((song) =>
      song.track.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setFilteredTracks(filterTracks);
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
          {filteredTracks.map((song) => {
            return <li key={song.track.name}>{song.track.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
