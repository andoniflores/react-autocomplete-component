import "./Autocomplete.css";
import { useEffect, useState } from "react";
import TrackCard from "./TrackCard";

export default function Autocomplete({ data }: { data: Track[] }) {
  const [showTrackList, setShowTrackList] =
    useState<Display>("trackListHidden");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredTracks, setFilteredTracks] = useState<Track[] | []>([]);
  useEffect(() => {
    filterTracks();
  }, [searchTerm, setSearchTerm]);

  function divDisplay(): string {
    return showTrackList;
  }

  function searchBarFocus() {
    setShowTrackList("trackListActive");
  }
  function searchBarBlur() {
    setShowTrackList("trackListHidden");
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
      className="search-container"
      tabIndex={0}
      onFocus={searchBarFocus}
      onBlur={searchBarBlur}
    >
      <input
        id="searchbar"
        placeholder={"search songs name 🔍"}
        type="text"
        onKeyUp={handleKeyUp}
      />
      <div id="songlist" className={divDisplay()}>
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
