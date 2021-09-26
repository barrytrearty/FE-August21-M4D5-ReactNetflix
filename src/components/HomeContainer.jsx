import MoviesRow from "./MoviesRow";
import SearchRow from "./SearchRow";
import MoviesRowMyAPI from "./MovieRowMyAPI";

const HomeContainer = () => {
  return (
    <div>
      <SearchRow />
      <MoviesRowMyAPI />
      <MoviesRow rowTitle="Harry Potter" />
      <MoviesRow rowTitle="Pixar" />
      <MoviesRow rowTitle="Batman" />
    </div>
  );
};

export default HomeContainer;
