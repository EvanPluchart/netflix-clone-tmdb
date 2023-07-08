import './App.css'
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import {Link, Route, Switch} from "wouter";
import Movies from "./routes/Movies.jsx";
import Error from "./components/Error.jsx";
import Castings from "./routes/Castings.jsx";
import Tvshows from "./routes/Tvshows.jsx";
import Carousel from "./components/Carousel.jsx";
import React, {useEffect, useState} from "react";
import {fetchMovies} from "./services/api/movie.js";
import MovieCard from "./components/MovieCard.jsx";
import {fetchTvshows} from "./services/api/tvshow.js";
import TvshowCard from "./components/TvshowCard.jsx";

export default function App() {
    const [movies, setMovies] = useState([]);
    const [tvShows, setTvShows] = useState([]);

    useEffect(() => {
        fetchMovies(1).then((movies) => {
            setMovies(movies);
        });

        fetchTvshows(1).then((tvShows) => {
            setTvShows(tvShows);
        });
    });

    return (
        <main className='App bg-zinc-900'>
            <Navbar />
            <Switch>
                <Route path={'/films/:sub*'} component={Movies} />
                <Route path={'/series/:sub*'} component={Tvshows} />
                <Route path={'/casting/:sub*'} component={Castings} />
                <Route path="/">
                    <div className={'md:px-60 px-10 flex flex-col gap-10'}>
                        <div>
                            <div className={'flex justify-between'}>
                                <h1 className={'font-bold text-xl text-white'}>Films populaires</h1>
                                <Link
                                    href={'/films'}
                                    className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 mr-2 rounded`}
                                >
                                    Voir plus
                                </Link>
                            </div>
                            <div className="bg-zinc-900 py-6 flex w-full">
                                <div className="castScroller w-full gap-4">
                                    {movies.map((movie) => (
                                        <MovieCard key={movie.id} movie={movie} />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className={'flex justify-between'}>
                                <h1 className={'font-bold text-xl text-white'}>Séries populaires</h1>
                                <Link
                                    href={'/series'}
                                    className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 mr-2 rounded`}
                                >
                                    Voir plus
                                </Link>
                            </div>
                            <div className="bg-zinc-900 py-6 flex">
                                <div className="castScroller movie-list flex w-full gap-4">
                                    {tvShows.map((tvshow) => (
                                        <TvshowCard key={tvshow.id} tvshow={tvshow} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </Route>
                <Route component={Error} />
            </Switch>
            <Footer />
        </main>
    )
}
