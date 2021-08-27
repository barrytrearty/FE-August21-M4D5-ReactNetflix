import { Component } from "react";
import { Container, Row } from "react-bootstrap";
import SingleMovie from "./SingleMovie";

class MoviesRow extends Component {
  render() {
    return (
      <Container className="container-fluid mb-4">
        <h2>Movie Row</h2>
        <Row className="row no-gutter row-cols-1 row-cols-sm-2row-cols-md-3 row-cols-lg-6">
          <SingleMovie />
          <SingleMovie />
          <SingleMovie />
          <SingleMovie />
        </Row>
      </Container>
    );
  }
}

export default MoviesRow;
