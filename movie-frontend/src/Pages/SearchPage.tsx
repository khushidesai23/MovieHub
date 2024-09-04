import React, { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard'
import SearchBar from '../components/SearchBar'
import { Link, useSearchParams } from 'react-router-dom';
import { FinalLoader } from '../components/Loading';


const SearchPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [isLoading, setIsLoading] = useState(true);
    const searchedMovie = searchParams.get('query');
    const option = searchParams.get('option');
    console.log(searchedMovie, option);
    const [movies, setMovies] = useState();
    const sendRequest = async () => {
        if(option === 'movieName')
        {
            const response = await fetch('http://localhost:8080/movieName?name='+ searchedMovie);
            const data = await response.json();
            console.log(data);
            return data;
        }
        else if(option === 'imdbRating'){
            const response = await fetch('http://localhost:8080/imdbRating?rating='+ searchedMovie);
            const data = await response.json();
            console.log(data);
            return data;
        }
        else if(option === 'ottPlatform'){
            const response = await fetch('http://localhost:8080/ott?ottPlatform='+ searchedMovie);
            const data = await response.json();
            console.log(data);
            return data;
        }
        else if(option === 'director'){
            const response = await fetch('http://localhost:8080/director?directorName='+ searchedMovie);
            const data = await response.json();
            console.log(data);
            return data;
        }
        else if(option === 'genre'){
            const response = await fetch('http://localhost:8080/genre?genreName='+ searchedMovie);
            const data = await response.json();
            console.log(data);
            return data;
        }

    }

    useEffect(() => {
        sendRequest().then((data) => {
            setMovies(data);
            setIsLoading(false);
        });
    }, [searchedMovie,option])
    
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
                <FinalLoader/>
                :
                movies?.length!==0
                    ?
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
                        :
                        <div className='flex justify-center items-center'>
                            <h1 className='text-white text-2xl'>No Movies Found</h1>
                        </div>
                    
            }
            
        </div>
    </div>
  )
}

export default SearchPage
