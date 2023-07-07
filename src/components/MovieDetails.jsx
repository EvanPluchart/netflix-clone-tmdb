import React from 'react';
import Loading from "./Loading.jsx";
import CastingScroller from "./CastingScroller.jsx";
import TrailerVideo from "./TrailerVideo.jsx";
import ViewProviders from "./ViewProviders.jsx";

export default function MovieDetails({ movie, cast, providers, videos }) {
    const date = new Date(movie.release_date);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMont = month < 10 ? `0${month}` : month;
    const releaseDate = `${formattedDay}/${formattedMont}/${year}`;

    return (

        <div className={'flex px-10 md:px-20 gap-5 flex-col'}>
            {providers === undefined || cast === undefined || movie === undefined ? ( <Loading></Loading>) : (
                <>
                    <div className={'flex gap-10 flex-col xl:flex-row'}>


                        <div className={'flex-2'}>
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                                className="rounded-lg shadow-lg"
                            />
                        </div>

                        <div className={'flex flex-col flex-1'}>
                            <div>
                                <h3 className={'text-white font-bold text-2xl md:text-4xl'}>{movie.title} <span className={'text-gray-400 font-normal'}>({year})</span></h3>
                                <p className={'text-gray-400 text-md'}>{releaseDate} <span className={'font-bold'}>&middot;</span> {movie.genres.map((genre) => genre.name).join(', ')} <span className={'font-bold'}>&middot;</span> {movie.runtime} minutes</p>
                            </div>

                            <div>
                                <h4 className={'text-white font-bold mt-5 text-xl md:text-3xl mb-3'}>Synopsis</h4>
                                <p className={'text-gray-400 text-sm md:text-md'}>{movie.overview}</p>
                            </div>

                            <ViewProviders providers={providers} />
                        </div>
                    </div>

                    <div className={'flex flex-col xl:flex-row'}>
                        <div className={'flex flex-col flex-1 items-center'}>
                            <TrailerVideo videos={videos} />
                            <CastingScroller cast={cast} />
                        </div>

                        <aside className={'flex flex-col text-white h-fit gap-5 mb-10 md:mb-0'}>
                            <h4 className={'text-white font-bold mt-5 text-3xl mb-3'}>Informations</h4>
                            <div className={'bg-zinc-800 p-6 rounded-lg flex flex-col gap-4'}>
                                <span>
                                    <h4 className={'font-bold'}>Tite original</h4>
                                    <p>{movie.original_title}</p>
                                </span>
                                    <span>
                                    <h4 className={'font-bold'}>Langue originale</h4>
                                    <p>{movie.original_language}</p>
                                </span>
                                    <span>
                                    <h4 className={'font-bold'}>Statut</h4>
                                    <p>{movie.status}</p>
                                </span>
                                    <span>
                                    <h4 className={'font-bold'}>Budget</h4>
                                    <p>{
                                        new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(movie.budget)
                                    }</p>
                                </span>
                                    <span>
                                    <h4 className={'font-bold'}>Recette</h4>
                                    <p>{
                                        new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(movie.revenue)
                                    }</p>
                                </span>
                            </div>

                        </aside>
                    </div>


                </>
            )}

        </div>
    );
}
