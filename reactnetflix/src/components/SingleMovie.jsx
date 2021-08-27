import { Component } from "react";
import { Col } from "react-bootstrap";
import poster from "../data/pic3.png";

class SingleMovie extends Component {
  render() {
    return (
      <Col>
        <a href="#_id}">
          <img src={poster} className="img-fluid w-100" />
        </a>
      </Col>
    );
  }
}

export default SingleMovie;
