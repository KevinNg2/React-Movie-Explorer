export default class TheMovieDbApi {
    apiBaseUrl = 'https://api.themoviedb.org/3';
    apiKey;

    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    getPopularMovies = async (page = 1) => {
        //get results back 
        const response = await fetch(
            `${this.apiBaseUrl}/movie/popular?api_key=${this.apiKey}&page=${page}`);

        //javascript object
        return response.json();
    }
    getMovie = async (id) => {
        //get results back 
        const response = await fetch(
            `${this.apiBaseUrl}/movie/${id}?api_key=${this.apiKey}&append_to_response=recommendations`);

        //javascript object
        return response.json();
    }
    searchMovies = async (query) => {
        //get results back 
        const response = await fetch(
            `${this.apiBaseUrl}/search/movie?api_key=${this.apiKey}&query=${query}`);

        //javascript object
        return response.json();
    }

    getGenres = async () => {
        //get results back 
        const response = await fetch(
            `${this.apiBaseUrl}/genre/movie/list?api_key=${this.apiKey}`);

        //javascript object
        return response.json();
    }
}

