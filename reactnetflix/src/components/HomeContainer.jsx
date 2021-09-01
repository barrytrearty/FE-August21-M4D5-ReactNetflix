import MoviesRow from "./MoviesRow";
import SearchRow from "./SearchRow";

const HomeContainer = () => {
  return (
    <div>
      <SearchRow />
      <MoviesRow rowTitle="Harry Potter" rowQuery="harry%20potter" />
      <MoviesRow rowTitle="Lord of the Rings" rowQuery="lord%20of%20rings" />
      <MoviesRow rowTitle="Batman" rowQuery="batman" />
    </div>
  );
};

export default HomeContainer;
