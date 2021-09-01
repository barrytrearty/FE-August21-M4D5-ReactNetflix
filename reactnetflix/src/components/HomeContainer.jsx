import MoviesRow from "./MoviesRow";
import SearchRow from "./SearchRow";

const HomeContainer = () => {
  return (
    <div>
      <SearchRow />
      <MoviesRow rowTitle="Harry Potter" />
      <MoviesRow rowTitle="Lord of the Rings" />
      <MoviesRow rowTitle="Batman" />
    </div>
  );
};

export default HomeContainer;
