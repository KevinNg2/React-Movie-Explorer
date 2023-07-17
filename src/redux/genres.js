import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    genres: [],
    //used for displaying loaders
    isFetching: false
};

const genresSlice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers: {
        getGenres: (state) => {
            return {
                ...state,
                isFetching: true
            }
        },
        // get callback
        fetchedGenres: (state, action) => {
            return {
                ...state,
                genres: action.payload.genres,
                isFetching: false
            }
        },
        resetState: (state) => {
            return initialState
        }
    }
});

export const { getGenres, fetchedGenres, resetState } = genresSlice.actions;

export default genresSlice.reducer;