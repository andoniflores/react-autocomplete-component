import "./App.css";
import Autocomplete from "./components/Autocomplete";

const data: Song[] = [
  { songname: "Sweet Home Alabama", artist: "Lynyrd Skynrd" },
  { songname: "i", artist: "Kendrick Lamar" },
  { songname: "Sweet Caroline", artist: "Neil Diamond" },
];
function App() {
  return (
    <>
      <div className="my-div">
        <Autocomplete data={data} />
      </div>
    </>
  );
}

export default App;
