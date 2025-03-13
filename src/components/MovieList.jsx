import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/App.scss'; // SCSS 파일 import

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const MovieList = ({ movies = [], isDarkMode }) => {
    const navigate = useNavigate();

    const handleMovieClick = (movie) => {
        navigate(`/details/${movie.id}`, { state: { movie } });
    };

    return (
        <div className={`movie-list ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            {movies.length > 0 ? (
                movies.map((movie) => (
                    <div className="movie-card" key={movie.id} onClick={() => handleMovieClick(movie)}>
                        {movie.poster_path ? (
                            <img src={`${BASE_IMAGE_URL}${movie.poster_path}`} alt={movie.title} />
                        ) : (
                            <div className="placeholder-image">이미지 없음</div>
                        )}
                        <div className={`info ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
                            <div className={`title ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
                                {movie.title}
                            </div>
                            <div className={`rating ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
                                ⭐ {movie.vote_average}
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p className={`text-center ${isDarkMode ? 'text-white' : 'text-black'}`}>영화가 없습니다.</p>
            )}
        </div>
    );
};

export default MovieList;
