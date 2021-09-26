import { useState, useEffect } from "react";
import { Carousel, Container, Row, Spinner, Col } from "react-bootstrap";
import React from "react";
import SingleMovie from "./SingleMovie";
// import { Link } from "react-router-dom";
// import Slider from "react-slick";

// const apiUrl = process.env.REACT_APP_BE_URL;

const MoviesRowMyAPI = () => {
  const [movies1, setMovies1] = useState([]);
  //   const [movies2, setMovies2] = useState([]);
  //   const [searchQuery, setSearchQuery] = useState("");

  const searchMovieFetch = async () => {
    try {
      let response = await fetch(`https://nebtflix.herokuapp.com/media`);
      let moviesArray = await response.json();
      setMovies1(moviesArray.Search.slice(0, 6));
      console.log(movies1);
      //   setMovies2(moviesArray.Search.slice(4, 10));
      // setMovies(moviesArray.Search);
      // console.log(this.state.movies);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    searchMovieFetch();
  }, []);

  return (
    <Container className="container-fluid mb-4">
      <h2>Lord of the Rings</h2>
      {movies1 === [] ? (
        <Spinner animation="border" variant="light" />
      ) : (
        <Carousel interval={null} className="carousel-fixed">
          {/* <Row className="no-gutter row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6"> */}
          {/* <Row className="no-gutter"> */}
          <Carousel.Item>
            <Row className="no-gutters row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 overflow-hidden">
              {movies1.map((movie) => (
                <Col className="movie-hover">
                  <SingleMovie movieObj={movie} />
                </Col>
              ))}
            </Row>
          </Carousel.Item>
          {/* <Carousel.Item>
            <Row className="no-gutters row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-6">
              {movies2
                .filter((m) => m.Title.toLowerCase().includes(searchQuery))
                .map((movie) => (
                  <Col>
                    <SingleMovie movieObj={movie} />
                  </Col>
                ))}
            </Row>
          </Carousel.Item> */}
        </Carousel>
      )}
    </Container>
  );
};

export default MoviesRowMyAPI;
