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
        <div className="trackname-container">
          <span>{name.slice(0, start)}</span>
          <span className="highlight-search">{name.slice(start, end + 1)}</span>
          <span>{name.slice(end + 1, name.length)}</span>
        </div>
      );
    }
  }
  function pauseTrack(el: HTMLAudioElement) {
    el.pause();
    el.currentTime = 0;
  }
  function pauseOtherTracks(el: HTMLAudioElement) {
    document.querySelectorAll("audio").forEach((elem: HTMLAudioElement) => {
      if (elem !== el) {
        pauseTrack(elem);
      }
    });
  }
  function playTrack() {
    let el = document.getElementById(data.name) as HTMLAudioElement;
    if (el == null) return;
    pauseOtherTracks(el);
    if (el.paused) {
      el.play();
    } else {
      pauseTrack(el);
    }
  }
  return (
    <div className="track-card">
      {data.album.images.map((image) => {
        if (image.height == 64) {
          return (
            <div className="image-container">
              {data.preview_url ? (
                <div className="playable" onClick={playTrack}>
                  <img
                    className="playable-img"
                    key={image.url}
                    src={image.url}
                  />
                </div>
              ) : (
                <img key={image.url} src={image.url} />
              )}
            </div>
          );
        }
      })}
      <div className="track-artist-container">
        <div className="trackname-container">{highlight(data.name)}</div>
        <div className="artist-container">
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
      </div>
      <div>
        {data.preview_url ? (
          <audio id={data.name} src={data.preview_url}></audio>
        ) : null}
      </div>
    </div>
  );
}
