import { useState, useEffect } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import React from "react";
import SingleMovie from "./SingleMovie";

const MoviesRow = ({ rowTitle }) => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const searchMovieFetch = async () => {
    try {
      let response = await fetch(
        "http://www.omdbapi.com/?apikey=4d0dfb28&s=" + rowTitle
      );
      let moviesArray = await response.json();
      // setMovies(moviesArray.Search.slice(0, 6));
      setMovies(moviesArray.Search);
      // console.log(this.state.movies);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    searchMovieFetch();
  }, []);

  return (
    // <Container className="container-fluid mb-4">

    // {movies === [] ? (
    //   <Spinner animation="border" variant="light" />
    // ) : (
    // <Row className="row no-gutter row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6">
    // <>
    //   <h2>{rowTitle}</h2>
    //   <Splide
    //     // className="movie-segment-carousel"
    //     options={{ rewind: true, perPage: 2, perMove: 1, gap: "1rem" }}
    //     onMoved={(splide, newIndex) => {
    //       console.log("moved", newIndex);
    //     }}
    //   >
    //     {movies
    //       .filter((m) => m.Title.toLowerCase().includes(searchQuery))
    //       .map((movie) => (
    //         <SplideSlide key={movie.imdbID}>
    //           <SingleMovie movieObj={movie} />
    //         </SplideSlide>
    //       ))}
    //   </Splide>
    // </>

    <Container className="container-fluid mb-4">
      <h2>{rowTitle}</h2>
      {movies === [] ? (
        <Spinner animation="border" variant="light" />
      ) : (
        <Row className="row no-gutter row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6">
          {movies
            .filter((m) => m.Title.toLowerCase().includes(searchQuery))
            .map((movie) => (
              <SingleMovie movieObj={movie} />
            ))}
        </Row>
      )}
    </Container>
  );
};

export default MoviesRow;
