import React from 'react';
import { Link } from 'react-router-dom';
import { getPosterUrl } from '../api/tmdb';
import { useFavorites } from '../hooks/useFavorites';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const isFav = isFavorite(movie.id);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    if (isFav) {
      removeFavorite(movie.id);
    } else {
      addFavorite(movie);
    }
  };
  
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}>
        <img 
          src={movie.poster_path ? getPosterUrl(movie.poster_path) : 'https://via.placeholder.com/500x750?text=No+Image'} 
          alt={movie.title} 
        />
        <div className="movie-info">
          <h3>{movie.title}</h3>
          <p>{movie.release_date ? movie.release_date.substring(0, 4) : 'N/A'}</p>
        </div>
      </Link>
      <button onClick={handleFavoriteClick} className={`favorite-btn ${isFav ? 'active' : ''}`}>
        {isFav ? '★' : '☆'}
      </button>
    </div>
  );
};

export default MovieCard