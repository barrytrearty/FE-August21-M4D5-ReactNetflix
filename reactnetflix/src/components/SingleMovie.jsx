import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { SplideSlide } from "@splidejs/react-splide";

const SingleMovie = ({ movieObj }) => {
  return (
    <Link to={"showdetails/" + movieObj.imdbID} key={movieObj.imdbID}>
      {/* <div
        className="d-flex flex-column align-items-center mt-3 justify-content-start"
        
      > */}
      <Card>
        {/* <SplideSlide className="single-movie-slide"> */}

        <img src={movieObj.Poster} alt="" className="img-fluid w-100 " />

        {/* </SplideSlide> */}
      </Card>
      {/* </div> */}
    </Link>
  );
};
// }

export default SingleMovie;
