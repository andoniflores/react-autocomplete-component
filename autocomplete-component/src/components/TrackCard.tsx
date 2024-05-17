import "./TrackCard.css";

export default function TrackCard({ data, searchTerm }: TrackCardProps) {
  function highlight(name: string) {
    if (searchTerm == "") {
      return name;
    }
    let start = name.toLowerCase().indexOf(searchTerm.toLowerCase());
    if (start != -1) {
      let end = start + searchTerm.length - 1;
      return (
        <div>
          <span>{name.slice(0, start)}</span>
          <span className="highlight-search">{name.slice(start, end + 1)}</span>
          <span>{name.slice(end + 1, name.length)}</span>
        </div>
      );
    }
  }
  function playTrack() {
    let el = document.getElementById(data.name) as HTMLAudioElement;
    if (el == null) return;
    if (el.paused) {
      el.play();
    } else {
      el.pause();
      el.currentTime = 0;
    }
  }
  return (
    <div className="track-card">
      <div className="image-container">
        {data.album.images.map((image) => {
          if (image.height == 64) {
            return (
              <div>
                {data.preview_url ? (
                  <div className="playable" onClick={playTrack}>
                    <img key={image.url} src={image.url} />
                  </div>
                ) : (
                  <img key={image.url} src={image.url} />
                )}
              </div>
            );
          }
        })}
      </div>
      <div className="track-artist-container">
        <div className="trackname-container">{highlight(data.name)}</div>
        <div className="artist-container"></div>
        {data.artists.map((artist) => {
          if (
            data.artists.length == 1 ||
            data.artists[data.artists.length - 1] == artist
          ) {
            return artist.name;
          }
          return artist.name + ", ";
        })}
      </div>
      <div>
        {data.preview_url ? (
          <audio id={data.name} src={data.preview_url}></audio>
        ) : null}
      </div>
    </div>
  );
}
