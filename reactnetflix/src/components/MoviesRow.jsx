import { Component } from "react";
import { Container, Row } from "react-bootstrap";
import SingleMovie from "./SingleMovie";

class MoviesRow extends Component {
  state = {
    movies: [],
  };

  componentDidMount = async () => {
    try {
      let response = await fetch(
        "http://www.omdbapi.com/?apikey=4d0dfb28&s=" + this.props.rowQuery
      );
      let moviesArray = await response.json();
      this.setState({
        movies: moviesArray.Search.slice(0, 6),
      });
      console.log(this.state.movies);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Container className="container-fluid mb-4">
        <h2>{this.props.rowTitle}</h2>
        <Row className="row no-gutter row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6">
          {this.state.movies.map((movie) => (
            <SingleMovie movieObj={movie} />
          ))}
        </Row>
      </Container>
    );
  }
}

export default MoviesRow;
