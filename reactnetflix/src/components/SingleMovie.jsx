import { Component } from "react";
import { Col } from "react-bootstrap";
// import poster from "../data/pic3.png";

class SingleMovie extends Component {
  render() {
    return (
      <Col key={this.props.movieObj.imdbID}>
        <a href="#Home">
          <img
            src={this.props.movieObj.Poster}
            alt=""
            className="img-fluid w-100"
          />
        </a>
      </Col>
    );
  }
}

export default SingleMovie;
