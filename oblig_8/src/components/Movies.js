import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import getMovies from '../lib/services/movieServ'
import Movie from './Movie'

const Movies = ({ movie, setMovie }) => {
  const fetchMovies = async () => {
    const data = await getMovies();
    setMovie(data);
  };

  useEffect(() => {
    fetchMovies();
  },[]);

  return (
    <> 
    {movie?.length > 0
      ? movie.map((film) => {
        const {actor, title, slug, _id} = film;
        console.log(film);
        return (
          <article key={title}>
            <h2>Movie title: {title}</h2>
            <p>Actor: {actor}</p>
            <Link to={slug}>Read more about Movie here</Link>
          </article>
        );
      }): null}
  </>
  )
}

export default Movies
