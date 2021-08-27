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
      <MoviesRow />
    </div>
  );
}

export default App;
