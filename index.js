require('dotenv').config();
const axios = require('axios');

const MOVIE_API_BASE_URL = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&language=en-US&query=`;
const keyword = 'Titanic';

axios.get(`${MOVIE_API_BASE_URL}${keyword}`)

.then( res => {
    const movies = res.data.results.slice(0, 12);

    movies.map( movie => {
        console.log(movie);
    })
})