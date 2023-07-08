import React, { useEffect, useState } from 'react';
import { Route, Switch, useLocation, useRoute } from "wouter";
import Loading from "../components/Loading.jsx";
import {
    fetchTvshowCredits,
    fetchTvshowDetails,
    fetchTvshowProviders,
    fetchTvshowVideos
} from "../services/api/tvshow.js";
import TvshowList from "../components/TvshowList.jsx";
import TvshowDetails from "../components/TvshowDetails.jsx";

export default function Tvshows() {
    const [match, { tvshowId }] = useRoute('/series/:tvshowId?');
    const [tvshow, setTvshow] = useState(undefined);
    const [cast, setCast] = useState(undefined);
    const [providers, setProviders] = useState(undefined);
    const [videos, setVideos] = useState(undefined);
    const [location, setLocation] = useLocation();

    useEffect(() => {
        setTvshow(undefined);
        if (tvshowId !== undefined && Number.isInteger(Number(tvshowId))) {
            fetchTvshowDetails(tvshowId).then((data) => {
                setTvshow(data);
            });

            fetchTvshowCredits(tvshowId).then((data) => {
                setCast(data);
            });

            fetchTvshowProviders(tvshowId).then((data) => {
                setProviders(data);
            });

            fetchTvshowVideos(tvshowId).then((data) => {
                setVideos(data);
            });
        }
    }, [tvshowId]);

    useEffect(() => {
        if (tvshow === null) {
            setLocation("/series");
        }
    }, [tvshow]);



    return (
        <Switch>
            <Route path={'/series'}>
                <TvshowList />
            </Route>
            <Route path={'/series/:tvshowId'}>
                {tvshow === undefined ? (
                    <>
                    <Loading />
                    </>
                ) : (
                    <TvshowDetails tvshow={tvshow} cast={cast} providers={providers} videos={videos} />
                )}
            </Route>

            <Route>
                <TvshowList />
            </Route>
        </Switch>
    );
}