// import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { SplideSlide } from "@splidejs/react-splide";

const SingleMovie = ({ movieObj }) => {
  return (
    <Link to={"showdetails/" + movieObj.imdbID} key={movieObj.imdbID}>
      <img src={movieObj.Poster} alt="" className="img-fluid w-100" />
    </Link>
  );
};
// }

export default SingleMovie;
