import React, { useEffect, useState } from 'react';
import {Route, Switch, useLocation, useRoute} from "wouter";
import MovieList from "../components/MovieList.jsx";
import { fetchMovieDetails } from "../services/api/index.js";
import Loading from "../components/Loading.jsx";

export default function Movies() {
    const [match, { movieId }] = useRoute('/films/:movieId?');
    const [movie, setMovie] = useState(undefined);
    const [location, setLocation] = useLocation();

    useEffect(() => {
        setMovie(undefined);
        if (movieId !== undefined && Number.isInteger(Number(movieId))) {
            fetchMovieDetails(movieId).then((data) => setMovie(data));
        }
    }, [movieId]);

    useEffect(() => {
        if (movie === null) {
            setLocation("/films");
        }
    }, [movie, setLocation]);

    console.log(movie)

    return (
        <Switch>
            <Route path={'/films'}>
                <MovieList />
            </Route>
            <Route path={'/films/:movieId'}>
                {movie === undefined && <Loading />}
                <h1>Détail</h1>
                {movie ? (
                    <>
                        <h1>cocuuo</h1>
                        <h1>{movie.title}</h1>
                    </>

                ) : (
                    <Loading />
                )}
            </Route>

            <Route>
                <MovieList />
            </Route>
        </Switch>
    );
}