import { Container, Card, Spinner } from "react-bootstrap";
import CommentArea from "./CommentArea";
import { useState, useEffect } from "react";
// import { useParams } from "@reach/router";

// const apiUrl = process.env.REACT_APP_BE_URL;

const ShowDetails = ({ match }) => {
  const movieId = match.params.showId;

  const [movieObj, setMovieObj] = useState(null);

  const fetchMovieDetails = async () => {
    try {
      let response = await fetch(
        `http://www.omdbapi.com/?apikey=4d0dfb28&i=` + movieId
      );
      let obj = await response.json();
      setMovieObj(obj);
      // console.log(movieObj);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovieDetails({ movieId });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container className="container-fluid mb-4">
      {movieObj === null ? (
        <Spinner animation="border" variant="light" />
      ) : (
        <div className="w-50">
          <Card>
            <img src={movieObj.Poster} alt="" className="img-fluid w-100 " />

            <span className="text-dark">{movieObj.Title}</span>
          </Card>
          <CommentArea imdbID={match.params.showId} />
        </div>
      )}
    </Container>
  );
};

export default ShowDetails;
