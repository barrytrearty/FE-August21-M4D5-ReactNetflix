import SingleMovie from "./SingleMovie";
import { useState } from "react";
import { Form, FormControl, Container, Row } from "react-bootstrap";

// const apiUrl = process.env.REACT_APP_BE_URL;

const SearchRow = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const generateSearchRow = async () => {
    try {
      let response = await fetch(
        `https://www.omdbapi.com/?apikey=4d0dfb28&s=` + searchQuery
      );
      let moviesArray = await response.json();
      setMovies(moviesArray.Search.slice(0, 6));
      // console.log(this.state.movies);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   generateSearchRow();
  // }, [searchQuery]);

  return (
    <>
      <Form inline>
        <FormControl
          bg="dark"
          variant="light"
          type="text"
          placeholder="Search"
          className="ml-auto mr-3"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            console.log(searchQuery);
            generateSearchRow();
          }}
        />
      </Form>

      <Container className="container-fluid mb-4">
        {/* <h2>{this.props.rowTitle}</h2> */}
        <h2>{searchQuery}</h2>
        <Row className="row no-gutter row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6">
          {movies.map((movie) => (
            <SingleMovie movieObj={movie} />
          ))}
          {/* <SingleMovie movieObj={this.state.movies} /> */}
        </Row>
      </Container>
    </>
  );
};

export default SearchRow;
