import React from "react";
import MovieCard from "./MovieCard.jsx";

const Movierow = () => {
  const movies = [
 {
    id: 3,
    title: "Bhabhiji",
    year: "2020",
    rating: "13+",
    genre: "Comedy",
    image: "/BHABHII JII.jpg",
  },
  {
    id: 4,
    title: "MI",
    year: "2020",
    rating: "13+",
    genre: "Drama",
    image: "/MI.jpg",
  },
  {
    id: 5,
    title: "Sex Education",
    year: "2020",
    rating: "18+",
    genre: "Comedy",
    image: "/SEX education.jpg",
  },
  {
    id: 6,
    title: "Taarak Mehta",
    year: "2020",
    rating: "13+",
    genre: "Comedy",
    image: "/TIMKOC.jpg",
  },
  {
    id: 7,
    title: "Wednesday",
    year: "2022",
    rating: "16+",
    genre: "Mystery",
    image: "/WEDNESDAY.jpg",
  },
];


  return (
    <section className="movie-row">
      <h2>Popular on Netflix</h2>

      <div className="movie-container">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}
      </div>
    </section>
  );
};

export default Movierow;