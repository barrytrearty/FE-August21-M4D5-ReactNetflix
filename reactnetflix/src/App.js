// import logo from "./logo.svg";
import NetflixNavbar from "./components/NetflixNavbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeContainer from "./components/HomeContainer";
import ShowDetails from "./components/ShowDetails";
// import SingleMovie from "./components/SingleMovie";
// import MoviesRow from "./components/MoviesRow";
// import SearchRow from "./components/SearchRow";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="body-div">
      <Router>
        <NetflixNavbar />
        <Route path="/" exact component={HomeContainer} />
        {/* <SearchRow />
      <MoviesRow rowTitle="Harry Potter" rowQuery="harry%20potter" />
      <MoviesRow rowTitle="Lord of the Rings" rowQuery="lord%20of%20rings" />
      <MoviesRow rowTitle="Batman" rowQuery="batman" /> */}
        <Route path="/showdetails/:showId" component={ShowDetails} />
      </Router>
    </div>
  );
}

export default App;
