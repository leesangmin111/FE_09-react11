import { useState, useEffect } from "react";

const API_URL = `${import.meta.env.VITE_TMDB_API_URL}/movie/popular`;
const ACCESS_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

const useFetchMovies = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${API_URL}?language=ko-KR`, {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${ACCESS_TOKEN}`,
                        "Content-Type": "application/json",
                    },
                });

                if (!response.ok) {
                    throw new Error("네트워크 응답이 좋지 않습니다.");
                }

                const data = await response.json();
                const filteredMovies = data.results.filter(movie => !movie.adult);
                setMovies(filteredMovies);
            } catch (error) {
                setError("데이터 로딩 중 오류가 발생했습니다.");
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, []);

    return { movies, loading, error };
};

export default useFetchMovies;
