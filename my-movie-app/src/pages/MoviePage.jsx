import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails, getPosterUrl } from '../api/tmdb';
import { useFavorites } from '../hooks/useFavorites';
import { Loading } from '../components/Loading.jsx';
import { ErrorMessage } from '../components/ErrorMessage.jsx';
import './Pages.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  useEffect(() => {
    const fetchDetails = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await getMovieDetails(movieId);
        setMovie(data);
      } catch (err) {
        setError('Não foi possível carregar os detalhes do filme.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchDetails();
  }, [movieId]);

  if (isLoading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;
  if (!movie) return null;

  const isFav = isFavorite(movie.id);
  const director = movie.credits.crew.find(person => person.job === 'Director');

  return (
    <div className="details-container">
      <img src={getPosterUrl(movie.poster_path)} alt={movie.title} className="details-poster" />
      <div className="details-info">
        <h1>{movie.title} ({movie.release_date.substring(0, 4)})</h1>
        <p><strong>Sinopse:</strong> {movie.overview}</p>
        <p><strong>Avaliação:</strong> {movie.vote_average.toFixed(1)} / 10</p>
        {director && <p><strong>Diretor:</strong> {director.name}</p>}
        <p><strong>Elenco Principal:</strong> {movie.credits.cast.slice(0, 5).map(actor => actor.name).join(', ')}</p>
        <button 
          onClick={() => isFav ? removeFavorite(movie.id) : addFavorite(movie)}
          className={`details-fav-btn ${isFav ? 'active' : ''}`}
        >
          {isFav ? 'Remover dos Favoritos ★' : 'Adicionar aos Favoritos ☆'}
        </button>
      </div>
    </div>
  );
};

export default MovieDetailsPage;