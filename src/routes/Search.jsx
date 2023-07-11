import React, {useEffect, useState} from 'react';
import {Route, Switch, useRoute} from "wouter";
import {fetchSearchMovies} from "../services/api/movie";
import {fetchSearchTvshow} from "../services/api/tvshow";
import MovieList from "../components/MovieList.jsx";
import Loading from "../components/Loading.jsx";
import TvshowList from "../components/TvshowList.jsx";

export default function Search() {
    const [match, { query }] = useRoute('/recherche/:query?');
    const [movies, setMovies] = useState(undefined);
    const [tvshows, setTvshows] = useState(undefined);


    useEffect(() => {
        setMovies(undefined);
        setTvshows(undefined);
        if (query !== undefined) {
            if (typeof query === 'string') {
                fetchSearchTvshow(query).then((data) => {
                    setTvshows(data);
                });

                fetchSearchMovies(query).then((data) => {
                    setMovies(data);
                });
            }
        }
    }, [query]);

    return (
        <Switch>
            <Route path={'/recherche'}>
                <h1>hey</h1>
            </Route>
            <Route path={'/recherche/:query?'}>
                {(movies !== undefined && movies.length !== 0) && (
                    <>
                        <h1 className={'font-bold text-white text-xl text-center'}>Films</h1>
                        <MovieList movies={movies} />
                    </>
                )}

                {(tvshows !== undefined && tvshows.length !== 0) && (
                    <>
                        <h1 className={'font-bold text-white text-xl text-center'}>Séries</h1>
                        <TvshowList tvshows={tvshows} />
                    </>
                )}
            </Route>
            <Route>
                <h1>defaut</h1>
            </Route>
        </Switch>
    )
}