import React, {useEffect, useState} from 'react';
import {Route, Switch, useLocation, useRoute} from "wouter";
import Loading from "../components/Loading.jsx";
import {fetchMovieCredits} from "../services/api/movie.js";
import ShowCastingDetail from "../components/ShowCastingDetail.jsx";
import {fetchTvshowCredits} from "../services/api/tvshow.js";

export default function Castings() {
    const [match, { id }] = useRoute('/casting/:id?');
    const [casting, setCasting] = useState(undefined);
    const [location, setLocation] = useLocation();

    useEffect(() => {
        setCasting(undefined);
        if (id !== undefined && Number.isInteger(Number(id))) {
            fetchMovieCredits(id).then((data) => {
                if (data.success === false) {
                    fetchTvshowCredits(id).then((data2) => {
                        setCasting(data2);

                    });
                } else {
                    setCasting(data);

                }
            });


        }
    }, [id]);

    useEffect(() => {
        if (casting === null) {
            setLocation("/");
        }
    }, [casting]);

    return (
        <Switch>
            <Route path={'/casting/:id'}>
                {casting === undefined ? (
                    <Loading />
                ) : (
                    <ShowCastingDetail casting={casting} />
                )}
            </Route>

            <Route>
                <ShowCastingDetail casting={casting} />
            </Route>
        </Switch>
    );
}
