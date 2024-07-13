import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const MovieContext = createContext();

const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState();

    useEffect(() => {
        axios.get("https://json-server-m82t.onrender.com/filmes").then((response) => {
            setMovies(response.data);
        }).catch((error) => {
            console.log(error);
        })

    },[]);


    return (
        <MovieContext.Provider value={{ movies }}>
            {children}
        </MovieContext.Provider>
    );
}

export default MovieProvider;