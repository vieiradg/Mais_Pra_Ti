import React, { useState, useEffect } from 'react';
import { searchMovies } from '../api/tmdb';
import MovieCard from '../components/MovieCard';
import Pagination from '../components/Pagination';
import { Loading } from '../components/Loading.jsx';
import { ErrorMessage } from '../components/ErrorMessage.jsx';
import './Pages.css';

const HomePage = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (query === '') {
      setMovies([]);
      setTotalPages(0);
      return;
    }

    const fetchMovies = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await searchMovies(query, currentPage);
        setMovies(data.results);
        setTotalPages(data.total_pages);
      } catch (err) {
        setError('Falha ao buscar filmes.');
      } finally {
        setIsLoading(false);
      }
    };
    
    const timeoutId = setTimeout(fetchMovies, 500);
    return () => clearTimeout(timeoutId);

  }, [query, currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="page-container">
      <h1>Busque por um Filme</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setCurrentPage(1);
        }}
        placeholder="Digite o nome do filme..."
        className="search-input"
      />
      
      {isLoading && <Loading />}
      {error && <ErrorMessage message={error} />}
      
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination 
          currentPage={currentPage} 
          totalPages={totalPages} 
          onPageChange={handlePageChange} 
        />
      )}
    </div>
  );
};

export default HomePage;