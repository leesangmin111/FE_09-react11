import React from "react";
import '../styles/App.scss';

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";

const MovieCard = ({ movie, isDarkMode }) => {
  return (
    <div className={`movie-card ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <img
        src={`${IMG_BASE_URL}${movie.poster_path}`}
        alt={movie.title}
        className="movie-card-img"
      />
      <div className={`movie-card-info ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <h3 className={`movie-title ${isDarkMode ? 'text-white' : 'text-black'}`}>{movie.title}</h3>
        <p className={`movie-rating ${isDarkMode ? 'text-white' : 'text-black'}`}>⭐ {movie.vote_average}</p>
      </div>
    </div>
  );
};

export default MovieCard;
