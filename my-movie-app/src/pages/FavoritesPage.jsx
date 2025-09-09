import React from 'react';
import { useFavorites } from '../hooks/useFavorites';
import MovieCard from '../components/MovieCard';
import './Pages.css';

const FavoritesPage = () => {
  const { favorites } = useFavorites();

  return (
    <div className="page-container">
      <h1>Meus Filmes Favoritos</h1>
      {favorites.length > 0 ? (
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <p className="status-message">Você ainda não adicionou nenhum filme aos favoritos.</p>
      )}
    </div>
  );
};

export default FavoritesPage;