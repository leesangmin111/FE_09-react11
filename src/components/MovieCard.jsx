import React from "react";
import '../styles/App.scss'; // 상대 경로로 App.scss를 참조
  // SCSS 파일 임포트

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card"> {/* SCSS 클래스로 변경 */}
      <img
        src={`${IMG_BASE_URL}${movie.poster_path}`}
        alt={movie.title}
        className="movie-card-img" // SCSS 클래스에 맞게 변경
      />
      <div>
        <h3>{movie.title}</h3>
        <p>⭐ {movie.vote_average}</p>
      </div>
    </div>
  );
};

export default MovieCard;
