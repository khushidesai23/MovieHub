import React, { useEffect, useState } from 'react'
import EachMovieCard from '../components/EachMovieCard';
import { movieInfo } from '../types';
import { useParams } from 'react-router-dom';

const EachMovie = () => {
    const id= useParams().idOfMovie;
    
    const [movieDetails, setMovie] = useState();

    const sendRequest = async () => {
        const movieData = await fetch(`http://localhost:8080/movie/${id}`);
        const movie = await movieData.json();
        const movieDetails = movie[0];
        return movieDetails;
    }
    useEffect(() => {
        sendRequest().then((data) => {
            setMovie(data);
        });
    }, [])

  return (
      <div className='mt-16'>
        <EachMovieCard
            movieId={movieDetails?.movie_id}
            key={movieDetails?.movie_id}
            name={movieDetails?.movie_name}
            imageLink={movieDetails?.poster_link}
            releaseYear={String(new Date(movieDetails?.release_date).getFullYear())}
            imdbRating={movieDetails?.imdb_rating}
            imdbVotes={movieDetails?.imdb_votes}
            language={movieDetails?.language}
            genre={movieDetails?.genre_names}
            // caste={movieDetails.caste}
            director={movieDetails?.director_name}
            description={movieDetails?.description}
            ott={movieDetails?.ott}
            duration={movieDetails?.duration}
            trailerLink={movieDetails?.trailer_link}
            />
            <div className='flex justify-center mt-16 mb-20'>
                <iframe
                src={movieDetails?.trailer_link.replace('watch?v=', 'embed/')}
                allow='autoplay; encrypted-media'
                title='video'
                width='1200'
                height='600'
                allowFullScreen={true}
                >
                </iframe>
            </div>
    </div>
  )
}

export default EachMovie
