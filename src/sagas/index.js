import { delay, all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { fetchedSearchMovies, searchMovies } from '../redux/search';
import { API_KEY } from '../config';
import TheMovieDbApi from '../lib/api';
import { fetchedGenres, getGenres } from '../redux/genres';
import { getPopularMovies, fetchedPopularMovies } from '../redux/movies';
import { getMovie, fetchedMovie } from '../redux/movie';


const api = new TheMovieDbApi(API_KEY);

function* fetchGenres() {
    yield put(fetchedGenres(yield call(api.getGenres)))
}


function* fetchSearchMovies(action) {
    //causes delay
    yield delay(500);

    yield put(
        // api requests and payload
        fetchedSearchMovies(yield call(api.searchMovies, action.payload))
    )
}

//recieves an action. inside action recieve page that loads from api
function* fetchPopularMovies(action) {
    yield put(
        //return json format
        fetchedPopularMovies(
            yield call(api.getPopularMovies, action.payload)
        ),
    );
}
//dispatching function, sending api response , id of the movie being fetched
function* fetchMovie(action) {
    yield put(fetchedMovie(yield call(api.getMovie, action.payload)));
}

export default function* watcherSaga() {
    yield all([
        yield takeEvery(getMovie.type, fetchMovie),
        yield takeEvery(getPopularMovies.type, fetchPopularMovies),
        yield takeEvery(getGenres.type, fetchGenres),
        yield takeLatest(searchMovies.type, fetchSearchMovies)
    ])
}