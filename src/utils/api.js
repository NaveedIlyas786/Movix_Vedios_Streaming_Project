//! Now here We will create a Global Method/Function using Axios through which we will call the Api
import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3"; //? For Storing Base URL of Website
const TMDB_TOKEN = import.meta.env.VITE_APP_MOVIX_TMDB_TOKEN;  //? For Storing TMDB Token of Website & and in "VITE" we import Token this way
//? We Will have to pass " TMDB_TOKEN " in the headers of " PARAMS "↴↴⇓⇓⇓ and below in headers variable we will store it.  
const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
} 
 
export const fetchDataFromApi = async (url, params) => {
    try {
        console.log(url);
        console.log(params);
        const { data } = await axios.get(BASE_URL + url, {  //!There are two arguments " URL & Options " and here URL is " BASE_URL + url " and Options are " {} "
            headers, //! Here we will pass configurations
            params
        })
        
        console.log(data);
        return data;  //! Using axios.get the Response will be stored  in " data " key and then we will return it.
        //! And Now Easily we can call Api using this " fetchDataFromApi " method in our components and then we will give them end-points
    } catch (error) {
        console.log(error);
        return error;
    }
}

