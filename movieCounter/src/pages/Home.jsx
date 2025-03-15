import MovieCard from "../components/MovieCard";

function Home() {
  const movies = [
    { id: 1, title: "john wick", release_date: "2022" },
    { id: 2, title: "terminator", release_date: "2022" },
    { id: 3, title: "Matrix", release_date: "2022" },
    { id: 4, title: "transformer", release_date: "2022" },
  ];

  const handleSearch = () => {};

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies"
          className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
      </form>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;
