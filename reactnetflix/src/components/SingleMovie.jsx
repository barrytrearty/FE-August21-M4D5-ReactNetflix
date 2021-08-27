import { Component } from "react";
import { Col } from "react-bootstrap";
// import poster from "../data/pic3.png";
import CommentArea from "./CommentArea";

class SingleMovie extends Component {

  state = {
    slected: false
  }
  render() {
    return (
      <>
        <Col key={this.props.movieObj.imdbID} onClick={() => this.setState({ selected: !this.state.selected })}
          style={{ border: this.state.selected ? '3px solid green' : 'none' }}>
          <a href="#Home">
            <img
              src={this.props.movieObj.Poster}
              alt=""
              className="img-fluid w-100"
            />
          </a>
        </Col>
        {
          this.state.selected && <CommentArea asin={this.props.movieObj.imdbID} />
        }
      </>);
  }
}

export default SingleMovie;
