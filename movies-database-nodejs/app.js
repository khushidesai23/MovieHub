const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

app.use(cors());

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'password',
    database: 'moviesDB'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
}
);



app.get('/allMovies', (req, res) => {
    db.query(`
    SELECT m.*, COALESCE(GROUP_CONCAT(g.genre_name), 'N/A') AS genre_names
    FROM movies m
    LEFT JOIN movie_genres mg ON m.movie_id = mg.movie_id
    LEFT JOIN genres g ON mg.genre_id = g.genre_id
    GROUP BY m.movie_id;`, (err, results) => {
        if (err) throw err;
        res.json(results);
      });
});



app.get('/movie/:id', (req, res) => {
    db.query(`
    SELECT m.*, COALESCE(GROUP_CONCAT(g.genre_name), 'N/A') AS genre_names
    FROM movies m
    LEFT JOIN movie_genres mg ON m.movie_id = mg.movie_id
    LEFT JOIN genres g ON mg.genre_id = g.genre_id
    where m.movie_id='${req.params.id}'
    GROUP BY m.movie_id;`, (err, results) => {
        if (err) throw err;
        res.json(results);
        });
});




app.get('/movieName', (req, res) => {
    const movieName = req.query.name;
    db.query(`
    SELECT m.*, COALESCE(GROUP_CONCAT(g.genre_name), 'N/A') AS genre_names
    FROM movies m
    LEFT JOIN movie_genres mg ON m.movie_id = mg.movie_id
    LEFT JOIN genres g ON mg.genre_id = g.genre_id
    where m.movie_name like '%${movieName}%'
    GROUP BY m.movie_id;`, (err, results) => {
        if (err) throw err;
        res.json(results);
        });
});

app.get('/imdbRating', (req, res) => {
    const imdbRating = req.query.rating;
    db.query(`
    SELECT m.*, COALESCE(GROUP_CONCAT(g.genre_name), 'N/A') AS genre_names
    FROM movies m
    LEFT JOIN movie_genres mg ON m.movie_id = mg.movie_id
    LEFT JOIN genres g ON mg.genre_id = g.genre_id
    where m.imdb_rating >= ${imdbRating}
    GROUP BY m.movie_id;`, (err, results) => {
        if (err) throw err;
        res.json(results);
        });
});


app.get('/ott', (req, res) => {
    const ottPlatform = req.query.ottPlatform;
    db.query(`
    SELECT m.*, COALESCE(GROUP_CONCAT(g.genre_name), 'N/A') AS genre_names
    FROM movies m
    LEFT JOIN movie_genres mg ON m.movie_id = mg.movie_id
    LEFT JOIN genres g ON mg.genre_id = g.genre_id
    where m.ott like '%${ottPlatform}%'
    GROUP BY m.movie_id;`, (err, results) => {
        if (err) throw err;
        res.json(results);
        });
});

app.get('/director', (req, res) => {
    const director = req.query.directorName;
    db.query(`
    SELECT m.*, COALESCE(GROUP_CONCAT(g.genre_name), 'N/A') AS genre_names
    FROM movies m
    LEFT JOIN movie_genres mg ON m.movie_id = mg.movie_id
    LEFT JOIN genres g ON mg.genre_id = g.genre_id
    where m.director_name like '%${director}%'
    GROUP BY m.movie_id;`, (err, results) => {
        if (err) throw err;
        res.json(results);
        });
});

app.get('/genre', (req, res) => {
    const genre = req.query.genreName;
    db.query(`
    SELECT m.*, COALESCE(GROUP_CONCAT(g.genre_name), 'N/A') AS genre_names
    FROM movies m
    LEFT JOIN movie_genres mg ON m.movie_id = mg.movie_id
    LEFT JOIN genres g ON mg.genre_id = g.genre_id
    WHERE g.genre_name like '%${genre}%'
    GROUP BY m.movie_id;
    `, (err, results) => {
        if (err) throw err;
        res.json(results);
        });
});




app.listen('8080', () => {
    console.log('Server started on port 3000');
}
);