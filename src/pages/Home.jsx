import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import '../styles/App.scss'; 
import useFetchMovies from "../hooks/useFetchMovies"; 
import MovieList from "../components/MovieList";

const Home = ({ isDarkMode }) => {
    const { movies, loading, error } = useFetchMovies();
    const location = useLocation();
    const [query, setQuery] = useState("");

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const searchQuery = queryParams.get("query");
        setQuery(searchQuery || ""); // URL에서 검색어 가져오기
    }, [location.search]);

    const filteredMovies = Array.isArray(movies) ? movies.filter(movie =>
        movie.title.toLowerCase().includes(query.toLowerCase())
    ) : [];

    if (loading) {
        return <div className={`text-center ${isDarkMode ? 'text-white' : 'text-black'}`}>로딩 중입니다...</div>;
    }

    if (error) {
        return <div className="text-red-500 text-center">{error}</div>;
    }

    return (
        <div className={`container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            {filteredMovies.length > 0 ? (
                <MovieList movies={filteredMovies} isDarkMode={isDarkMode} />
            ) : (
                <p className={`text-center ${isDarkMode ? 'text-white' : 'text-black'}`}>검색 결과가 없습니다.</p>
            )}
        </div>
    );
};

export default Home;
