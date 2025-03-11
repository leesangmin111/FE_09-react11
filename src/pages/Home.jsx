import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import movieListData from "../data/movieListData.json";
import '../styles/App.scss'; 

const BASE_IMG_URL = "https://image.tmdb.org/t/p/w500";
const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); 

  const location = useLocation(); 
  const query = new URLSearchParams(location.search).get('query'); 

  useEffect(() => {
    if (query) {
      setSearchTerm(query); 
    }

    try {
      if (Array.isArray(movieListData.results)) {
        setMovies(movieListData.results);
      } else {
        setError("데이터 형식이 올바르지 않습니다.");
        console.error("영화 리스트가 배열이 아닙니다:", movieListData);
      }
    } catch (err) {
      setError("데이터 로딩 중 오류가 발생했습니다.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [query]); // 쿼리가 바뀔 때마다 실행

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <div className="text-center text-white">로딩 중입니다...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <div>
      <div className="container">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <Link to={`/details/${movie.id}`} state={{ movie }} key={movie.id}>
              <div className="card">
                <img src={`${BASE_IMG_URL}${movie.poster_path}`} alt={movie.title} />
                <div className="info">
                  <div className="title">{movie.title}</div>
                  <div className="rating">⭐ {movie.vote_average.toFixed(1)}</div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center">영화가 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
