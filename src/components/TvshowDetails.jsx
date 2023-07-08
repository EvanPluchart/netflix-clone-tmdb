import React from 'react';
import Loading from "./Loading.jsx";
import CastingScroller from "./CastingScroller.jsx";
import TrailerVideo from "./TrailerVideo.jsx";
import ViewProviders from "./ViewProviders.jsx";

export default function TvshowDetails({ tvshow, cast, providers, videos }) {
    const date = new Date(tvshow.first_air_date);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMont = month < 10 ? `0${month}` : month;
    const releaseDate = `${formattedDay}/${formattedMont}/${year}`;

    return (

        <div className={'flex px-10 md:px-20 gap-5 flex-col'}>
            {providers === undefined || cast === undefined || tvshow === undefined ? ( <Loading></Loading>) : (
                <>
                    <div className={'flex gap-10 flex-col xl:flex-row'}>


                        <div className={'flex-2'}>
                            <img
                                src={`https://image.tmdb.org/t/p/w500${tvshow.poster_path}`}
                                alt={tvshow.name}
                                className="rounded-lg shadow-lg"
                            />
                        </div>

                        <div className={'flex flex-col flex-1'}>
                            <div>
                                <h3 className={'text-white font-bold text-2xl md:text-4xl'}>{tvshow.name} <span className={'text-gray-400 font-normal'}>({year})</span></h3>
                                <p className={'text-gray-400 text-md'}>{releaseDate} <span className={'font-bold'}>&middot;</span> {tvshow.genres.map((genre) => genre.name).join(', ')} <span className={'font-bold'}>&middot;</span> {tvshow.number_of_seasons} saisons</p>
                            </div>

                            <div>
                                <h4 className={'text-white font-bold mt-5 text-xl md:text-3xl mb-3'}>Synopsis</h4>
                                {tvshow.overview === '' ? (
                                    <p className={'text-gray-400 text-sm md:text-md'}>Aucun synopsis disponible</p>
                                ) : (
                                    <p className={'text-gray-400 text-sm md:text-md'}>{tvshow.overview}</p>
                                )}
                            </div>

                            <ViewProviders providers={providers} />
                        </div>
                    </div>

                    <div className={'flex flex-col w-full'}>
                        <div className={'flex flex-col flex-1 items-center w-full'}>
                            <TrailerVideo videos={videos} />
                            <CastingScroller cast={cast} id={tvshow.id} />
                        </div>

                        <aside className={'flex flex-col text-white h-fit gap-5 mb-10 md:mb-0'}>
                            <h4 className={'text-white font-bold mt-5 text-3xl mb-3'}>Informations</h4>
                            <div className={'bg-zinc-800 p-6 rounded-lg flex flex-col gap-4'}>
                                <span>
                                    <h4 className={'font-bold'}>Tite original</h4>
                                    <p>{tvshow.original_name}</p>
                                </span>
                                <span>
                                    <h4 className={'font-bold'}>Langue originale</h4>
                                    <p>{tvshow.original_language}</p>
                                </span>
                                <span>
                                    <h4 className={'font-bold'}>Statut</h4>
                                    <p>{tvshow.status}</p>
                                </span>
                                <span>
                                    <h4 className={'font-bold'}>Nombres de saisons</h4>
                                    <p>{tvshow.number_of_seasons}</p>
                                </span>
                                <span>
                                    <h4 className={'font-bold'}>Nombres d'épisodes</h4>
                                    <p>{tvshow.number_of_episodes}</p>
                                </span>
                            </div>

                        </aside>
                    </div>


                </>
            )}

        </div>
    );
}
