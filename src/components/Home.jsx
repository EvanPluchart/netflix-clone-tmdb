import React, {useEffect, useState} from 'react';
import {Link} from "wouter";
import MovieCard from "./MovieCard.jsx";
import TvshowCard from "./TvshowCard.jsx";
import {fetchMovies} from "../services/api/movie.js";
import {fetchTvshows} from "../services/api/tvshow.js";

export default function Home() {
    const [movies, setMovies] = useState([]);
    const [tvShows, setTvShows] = useState([]);

    useEffect(() => {
        fetchMovies(Math.floor(Math.random() * 500)).then((movies) => {
            setMovies(movies);
        });

        fetchTvshows(Math.floor(Math.random() * 500)).then((tvShows) => {
            setTvShows(tvShows);
        });
    }, []);

    return (
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

            <div className={'flex flex-col gap-4 mb-20 md:mb-0'}>
                <div>
                    <h1 className={'font-bold text-xl text-white'}>Découvrir</h1>
                    <p className={'text-md text-white'}>
                        Vous ne savez pas quoi regarder ? Laissez-vous guider par nos suggestions de films et séries.
                    </p>
                </div>

                <div className="flex justify-between flex-col gap-4 md:flex-row">
                    <Link
                        href={'/films/decouvrir'}
                        className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 mr-2 rounded w-full text-center`}
                    >
                        Découvrir un film
                    </Link>
                    <Link
                        href={'/series/decouvrir'}
                        className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 mr-2 rounded w-full text-center`}
                    >
                        Découvrir une serie
                    </Link>
                </div>



            </div>


        </div>
    );
}