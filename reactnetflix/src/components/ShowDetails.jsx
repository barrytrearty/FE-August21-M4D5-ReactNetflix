import { Container, Card, Spinner } from "react-bootstrap";
import CommentArea from "./CommentArea";
import { useState, useEffect } from "react";
// import { useParams } from "@reach/router";

const ShowDetails = ({ match }) => {
  // const [movieObj, setMovieObj] = useState({
  //   Title: "Harry Potter and the Sorcerer's Stone",
  //   Year: "2001",
  //   Poster:
  //     "https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
  // });

  const movieId = match.params.showId;

  const [movieObj, setMovieObj] = useState(null);

  const fetchMovieDetails = async () => {
    try {
      let response = await fetch(
        "http://www.omdbapi.com/?apikey=4d0dfb28&i=" + movieId
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
  }, []);

  return (
    <Container className="container-fluid mb-4">
      {movieObj === null ? (
        <Spinner animation="border" variant="light" />
      ) : (
        <div>
          {" "}
          <Card>
            <img src={movieObj.Poster} alt="" className="img-fluid w-100 " />

            <span className="text-dark">{movieObj.Title}</span>
          </Card>
          <CommentArea imdbID={match.params.showId} />{" "}
        </div>
      )}
    </Container>
  );
};

export default ShowDetails;
