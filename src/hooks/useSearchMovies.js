//비동기 통신하는애들은 훅으로//import { useState } from "react";
import axios from "axios";

const API_KEY = "726e86be4c281836114a1e857cdeb044"; // 실제 TMDb API 키

const useSearchMovies = () => {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchMovies = async (query) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get("https://api.themoviedb.org/3/search/movie", {
        params: {
          api_key: API_KEY,
          query: query,
        },
      });

      const movies = response.data.results || [];
      const nonAdultMovies = movies.filter((movie) => !movie.adult);
      setFilteredMovies(nonAdultMovies);
    } catch (error) {
      setError("영화 검색 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return { filteredMovies, loading, error, searchMovies };
};

export default useSearchMovies;
