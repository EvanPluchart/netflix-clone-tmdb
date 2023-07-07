import React, {useEffect, useState} from 'react';
import {Route, Switch, useLocation, useRoute} from "wouter";
import Loading from "../components/Loading.jsx";
import {fetchMovieCredits, fetchMovieDetails, fetchMovieProviders, fetchMovieVideos} from "../services/api/index.js";
import AnonymousAvatar from "../assets/anonymous-avatar.jpg";
import ShowCastingDetail from "../components/ShowCastingDetail.jsx";

export default function Castings() {
    const [match, { movieId }] = useRoute('/casting/:movieId?');
    const [casting, setCasting] = useState(undefined);
    const [location, setLocation] = useLocation();

    useEffect(() => {
        setCasting(undefined);
        if (movieId !== undefined && Number.isInteger(Number(movieId))) {
            fetchMovieCredits(movieId).then((data) => {
                setCasting(data);
                console.log(data);
            });
        }
    }, [movieId]);

    useEffect(() => {
        if (casting === null) {
            setLocation("/");
        }
    }, [casting]);

    return (
        <Switch>
            <Route path={'/casting/:movieId'}>
                {casting === undefined ? (
                    <Loading />
                ) : (
                    <ShowCastingDetail casting={casting} />
                )}
            </Route>

            <Route>
                <h1>hey test</h1>
            </Route>
        </Switch>
    );
}
