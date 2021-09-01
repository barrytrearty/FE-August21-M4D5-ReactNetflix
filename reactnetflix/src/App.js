// import logo from "./logo.svg";
import NetflixNavbar from "./components/NetflixNavbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeContainer from "./components/HomeContainer";
import ShowDetails from "./components/ShowDetails";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="body-div">
      <Router>
        <NetflixNavbar />
        <Route path="/" exact component={HomeContainer} />
        <Route path="/showdetails/:showId" component={ShowDetails} />
      </Router>
    </div>
  );
};

export default App;
