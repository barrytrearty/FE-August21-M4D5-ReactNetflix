import MoviesRow from "./MoviesRow";
import SearchRow from "./SearchRow";

const HomeContainer = () => {
  return (
    <div>
      <SearchRow />
      <MoviesRow rowTitle="Harry Potter" />
      <MoviesRow rowTitle="Pixar" />
      <MoviesRow rowTitle="Batman" />
    </div>
  );
};

export default HomeContainer;
