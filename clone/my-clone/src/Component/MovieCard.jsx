import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img
        src={movie.image}
        alt={movie.title}
        className="movie-card-image"
      />

      <div className="movie-card-info">
        <h3>{movie.title}</h3>

        <div className="movie-card-details">
          <span>{movie.year}</span>
          <span>{movie.rating}</span>
          <span>{movie.genre}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;