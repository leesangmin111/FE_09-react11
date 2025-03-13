import React from "react";
import { useLocation, useParams } from "react-router-dom";
import '../styles/App.scss';

const MovieDetail = ({ isDarkMode }) => {
    const location = useLocation();
    const { id } = useParams();
    const movie = location.state?.movie;

    if (!movie) {
        return (
            <div className={`movie-detail ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
                <h2>No movie data found for ID: {id}</h2>
                <p>Please navigate from the main page.</p>
            </div>
        );
    }

    const BASE_IMG_URL = `https://image.tmdb.org/t/p/w500`;

    return (
        <div className={`movie-detail ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <div className="detail-container">
                <div className="poster-container">
                    <img
                        className="poster"
                        src={`${BASE_IMG_URL}${movie.poster_path}`}
                        alt={movie.title}
                    />
                </div>

                <div className="info-container">
                    <h1 className="title">{movie.title}</h1>
                    <div className="rating">평점: ⭐ {movie.vote_average.toFixed(1)}</div>
                    <div className="genres">
                        장르: {movie.genres ? movie.genres.map((genre) => genre.name).join(", ") : "장르 정보 없음"}
                    </div>
                    <div className="overview">
                        줄거리: {movie.overview || "줄거리 정보 없음"}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetail;
