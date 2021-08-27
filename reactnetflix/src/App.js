// import logo from "./logo.svg";
import NetflixNavbar from "./components/NetflixNavbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import SingleMovie from "./components/SingleMovie";
import MoviesRow from "./components/MoviesRow";

function App() {
  return (
    <div className="body-div">
      <NetflixNavbar />
      <MoviesRow rowTitle="Harry Potter" rowQuery="harry%20potter" />
      <MoviesRow rowTitle="Lord of the Rings" rowQuery="lord%20of%20rings" />
      <MoviesRow rowTitle="Batman" rowQuery="batman" />
    </div>
  );
}

export default App;
