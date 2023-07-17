import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import movie, { getMovie, resetState } from "../redux/movie";
import Loader from '../components/Loader';
import Movie from "../components/Movie";

const MovieDetails = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { movie } = useSelector((store) => store);
    const { genres } = useSelector((store) => store.genres);

    useEffect(() => {
        dispatch(getMovie(id ? parseInt(id, 10) : 0));

        return () => {
            dispatch(resetState());
        }
    }, [dispatch]);
    //callback function
    useEffect(() => {
        if (id !== movie.id?.toString()) {
            dispatch(getMovie(id ? parseInt(id, 10) : 0));
        }
    }, [id, movie.id]);

    return (
        //objects as properties to access them in movie component
        movie.isFetching ? <Loader /> : <Movie movie={movie} genres={genres} />
    );
}

export default MovieDetails;