import React, { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard'
import SearchBar from '../components/SearchBar'
import { Link } from 'react-router-dom';
import Loading, { FinalLoader } from '../components/Loading';

const Home = () => {
    const [movies, setMovies] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const sendRequest = async () => {
        const response = await fetch('http://localhost:8080/allMovies');
        const data = await response.json();
        console.log(data);
        return data;
    }

    useEffect(() => {
        sendRequest().then((data) => {
            setMovies(data);
            setIsLoading(false);
        });
    }, [])
    
  return (
    <div>
        <div>
            <Link to={'/'}>
                <h1 className='text-4xl text-center font-bold text-white mt-10'>Welcome to MovieHub</h1>
            </Link>
        </div>
        <SearchBar/>
        <div className='flex flex-wrap mt-[100px] justify-center mb-10'>
            {
                isLoading ? 
                <FinalLoader/> : 
                movies?.map((movie:any) => {
                    return (
                        <MovieCard   
                            key={movie.movie_id}
                            name={movie.movie_name}
                            imdbRating={movie.imdb_rating}
                            imdbVotes={movie.imdb_votes}
                            imageLink={movie.poster_link}
                            releaseYear={String(new Date(movie?.release_date).getFullYear())}
                            language={movie.language}
                            genre={movie.genre_names}
                            movieId={movie.movie_id}
                        />
                    )
                })
            }
        </div>
    </div>
  )
}

export default Home
