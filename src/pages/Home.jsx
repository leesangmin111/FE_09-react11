import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import '../styles/App.scss'; 

const BASE_IMG_URL = "https://image.tmdb.org/t/p/w500";
const API_URL = `${import.meta.env.VITE_TMDB_API_URL}/movie/popular?language=ko-KR`;

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); 

  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');

  // 초기 API 호출
  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const response = await fetch(API_URL, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("네트워크 응답이 좋지 않습니다.");
        }

        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        setError("데이터 로딩 중 오류가 발생했습니다.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []); // 초기 API 호출

  // 쿼리 파라미터가 바뀔 때마다 검색어 업데이트
  useEffect(() => {
    setSearchTerm(query || ""); // 쿼리 파라미터가 없으면 빈 문자열
  }, [query]); // query가 바뀔 때마다 실행

  // 필터링된 영화 리스트
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
