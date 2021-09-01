import { Component } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
// import poster from "../data/pic3.png";
// import CommentArea from "./CommentArea";

class SingleMovie extends Component {
  // state = {
  //   selected: false,
  // };
  render() {
    return (
      <>
        <Link to={"showdetails/" + this.props.movieObj.imdbID}>
          <div className="d-flex flex-column align-items-center mt-3 justify-content-start">
            <div>
              <Card
                key={this.props.movieObj.imdbID}
                // onClick={() => this.setState({ selected: !this.state.selected })}
                // style={{
                //   border: this.state.selected ? "3px solid green" : "none",
                // }}
              >
                <a href="#Home">
                  <img
                    src={this.props.movieObj.Poster}
                    alt=""
                    className="img-fluid w-100 "
                  />
                </a>
                <span className="text-dark">{this.props.movieObj.Title}</span>
              </Card>
            </div>

            {/* <div> */}
            {/* {this.state.selected && ( */}
            {/* <CommentArea imdbID={this.props.movieObj.imdbID} /> */}
            {/* )} */}
            {/* </div> */}
          </div>
        </Link>
      </>
    );
  }
}

export default SingleMovie;
