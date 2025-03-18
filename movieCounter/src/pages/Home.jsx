import MovieCard from "../components/MovieCard";
import {useState} from "react";
import "../css/Home.css";

function Home() {
  const[searchQuery,setSearchQuery] = useState("");
  const movies = [
    { id: 1, title: "john wick", release_date: "2022" },
    { id: 2, title: "terminator", release_date: "2022" },
    { id: 3, title: "Matrix", release_date: "2022" },
    { id: 4, title: "transformer", release_date: "2022" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for ${searchQuery}`);
    setSearchQuery("");
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies"
          className="search-input"
          value={ searchQuery }
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button" onClick={handleSearch}>Search</button>
      </form>
      <div className="movies-grid">
        {movies.map((movie) => 
          movie.title.toLowerCase().startsWith(searchQuery) && (
          <MovieCard key={movie.id} movie={movie} />
        )
      )}
      </div>
    </div>
  );
}

export default Home;
