export type movieCardData = {
    name: string;
    imdbRating: number;
    imdbVotes: number;
    imageLink: string;
    releaseYear: string;
    genre?: string;
    language: string;
    movieId: number;
}

// movie_id: 3,
//   movie_name: 'The Dark Knight',
//   imdb_rating: 9,
//   imdb_votes: 2426412,
//   release_date: '2008-07-17T18:30:00.000Z',
//   language: 'English',
//   genre: 'Action',
//   director_name: 'Christopher Nolan',
//   description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
//   poster_link: 'https://m.media-amazon.com/images/M/MV5BYTFiMmNjNzgtMzA3NC00ZWI5LWIxMTUtYTNjZDI1YTYyZmJhXkEyXkFqcGdeQXVyNTU4NTE5MDQ@._V1_.jpg',
//   ott: 'HBO Max',
//   duration: '02:32:45',
//   trailer_link: 'https://www.youtube.com/watch?v=EXeTwQWrcwY',
//   caste: 'Christian Bale

export type movieInfo = {
    name: string;
    imdbRating: number;
    imdbVotes: number;
    imageLink: string;
    releaseYear: string;
    genre?: string;
    language: string;
    movieId: number;
    director: string;
    description: string;
    ott: string;
    duration: string;
    trailerLink: string;
    caste?: string;
}



