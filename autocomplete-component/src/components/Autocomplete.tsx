import "./Autocomplete.css";
import { useEffect, useState } from "react";
import TrackCard from "./TrackCard";

export default function Autocomplete({ data }: { data: Track[] }) {
  const [showTrackList, setShowTrackList] = useState<Display>("none");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredTracks, setFilteredTracks] = useState<Track[] | []>([]);
  const divDisplay = {
    display: showTrackList,
  };
  useEffect(() => {
    filterTracks();
  }, [searchTerm, setSearchTerm]);

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
    <div
      tabIndex={0}
      style={{ width: "400px", border: "3px solid green" }}
      onFocus={searchBarFocus}
      onBlur={searchBarBlur}
    >
      <input id="searchbar" type="search" onKeyUp={handleKeyUp} />
      <div id="songlist" style={divDisplay}>
        {filteredTracks.map((song) => {
          return (
            <TrackCard
              key={song.track.name}
              data={song.track}
              searchTerm={searchTerm}
            />
          );
        })}
      </div>
    </div>
  );
}
