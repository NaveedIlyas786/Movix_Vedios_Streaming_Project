import { createSlice } from '@reduxjs/toolkit'



export const homeSlice = createSlice({
    name: "home",
    initialState: {
        url: {}, //! Data of ( Images path, Movies Posters paths, Profile Images paths ) will be stored here
        genres: {}  //! In Movie Websites we call the categories with name: " Genres "
    },
    reducers: {
        //! Always we will write actions in reducers
        getApiConfiguration: (state, action) => {
            state.url = action.payload;
        }, 
        getGenres: (state, action) => {
            state.genres = action.payload;
        },
    },
})

// Action creators are generated for each case of reducer function
export const { getApiConfiguration, getGenres } = homeSlice.actions

export default homeSlice.reducer