import React, { useEffect, useState } from 'react';
import { Route, Switch, useLocation, useRoute } from "wouter";
import MovieList from "../components/MovieList.jsx";
import {
    fetchDiscoverMovies,
    fetchMovieCredits,
    fetchMovieDetails,
    fetchMovieProviders,
    fetchMovieVideos
} from "../services/api/movie.js";
import Loading from "../components/Loading.jsx";
import MovieDetails from "../components/MovieDetails.jsx";

export default function Movies() {
    const [match, { movieId }] = useRoute('/films/:movieId?');
    const [movie, setMovie] = useState(undefined);
    const [cast, setCast] = useState(undefined);
    const [providers, setProviders] = useState(undefined);
    const [videos, setVideos] = useState(undefined);
    const [location, setLocation] = useLocation();

    useEffect(() => {
        setMovie(undefined);
        if (movieId !== undefined && movieId === 'decouvrir') {
            fetchDiscoverMovies(Math.floor(Math.random() * 500)).then((movies) => {
                const movie = movies[Math.floor(Math.random() * movies.length)];
                setMovie(movie);
                console.log(movie)
                setLocation('/films/' + movie.id)
            });
        } else if (movieId !== undefined && Number.isInteger(Number(movieId))) {
            fetchMovieDetails(movieId).then((data) => {
                setMovie(data);
            });

            fetchMovieCredits(movieId).then((data) => {
                setCast(data);
            });

            fetchMovieProviders(movieId).then((data) => {
                setProviders(data);
            });

            fetchMovieVideos(movieId).then((data) => {
                setVideos(data);
            });
        }
    }, [movieId]);

    useEffect(() => {
        if (movie === null) {
            setLocation("/films");
        }
    }, [movie]);



    return (
        <Switch>
            <Route path={'/films'}>
                <MovieList />
            </Route>
            <Route path={'/films/:movieId'}>
                {movie === undefined ? (
                    <>
                    <Loading />
                    </>
                ) : (
                    <MovieDetails movie={movie} cast={cast} providers={providers} videos={videos} />
                )}
            </Route>

            <Route>
                <MovieList />
            </Route>
        </Switch>
    );
}