import React from 'react';
import Loading from "./Loading.jsx";

export default function MovieDetails({ movie, cast, providers, videos }) {
    const date = new Date(movie.release_date);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMont = month < 10 ? `0${month}` : month;
    const releaseDate = `${formattedDay}/${formattedMont}/${year}`;

    if (videos !== undefined) {
        console.log(videos);
    }

    console.log(movie)

    return (

        <div className={'flex px-20 gap-5 flex-col'}>
            {providers === undefined || cast === undefined || movie === undefined ? ( <Loading></Loading>) : (
                <>
                    <div className={'flex gap-10'}>


                        <div className={'flex-2'}>
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                                className="rounded-lg shadow-lg"
                            />
                        </div>

                        <div className={'flex flex-col flex-1'}>
                            <div>
                                <h3 className={'text-white font-bold text-4xl'}>{movie.title} <span className={'text-gray-500 font-normal'}>({year})</span></h3>
                                <p className={'text-gray-400 text-md'}>{releaseDate} <span className={'font-bold'}>&middot;</span> {movie.genres.map((genre) => genre.name).join(', ')} <span className={'font-bold'}>&middot;</span> {movie.runtime} minutes</p>
                            </div>

                            <div>
                                <h4 className={'text-white font-bold mt-5 text-3xl mb-3'}>Synopsis</h4>
                                <p className={'text-gray-400 text-md'}>{movie.overview}</p>
                            </div>

                            <div>
                                <h4 className={'text-white font-bold mt-5 text-3xl mb-3'}>Regarder sur</h4>
                                {!providers.results.FR ? <p className={'text-gray-400 text-md'}>Aucun résultat</p> :
                                    <div className={'flex flex-col gap-5'}>
                                        <div className={'flex flex-col gap-2'}>
                                            <h5 className={'text-white font-bold'}>Abonnement</h5>
                                            <div className={'flex gap-2'}>
                                                {providers.results.FR?.flatrate.map((provider) => (
                                                    <img
                                                        key={provider.provider_id}
                                                        src={`https://image.tmdb.org/t/p/w500${provider.logo_path}`}
                                                        alt={provider.provider_name}
                                                        className="w-20 rounded-lg shadow-lg"
                                                    />
                                                ))}
                                            </div>
                                        </div>

                                        <div className={'flex flex-col gap-2'}>
                                            <h5 className={'text-white font-bold'}>Location</h5>
                                            <div className="flex gap-2">
                                                {providers.results.FR?.rent.map((provider) => (
                                                    <img
                                                        key={provider.provider_id}
                                                        src={`https://image.tmdb.org/t/p/w500${provider.logo_path}`}
                                                        alt={provider.provider_name}
                                                        className="w-20 rounded-lg shadow-lg"
                                                    />
                                                ))}
                                            </div>
                                        </div>

                                        <div className={'flex flex-col gap-2'}>
                                            <h5 className={'text-white font-bold'}>Achat</h5>
                                            <div className="flex gap-2">
                                                {providers.results.FR?.buy.map((provider) => (
                                                    <img
                                                        key={provider.provider_id}
                                                        src={`https://image.tmdb.org/t/p/w500${provider.logo_path}`}
                                                        alt={provider.provider_name}
                                                        className="w-20 rounded-lg shadow-lg"
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>

                    <div className={'flex'}>
                        <div className={'flex flex-col flex-1 justify-center items-center'}>
                            {videos.results.length === 0 ? <p className={'text-gray-400 text-md'}>Aucune bande annonce</p> :
                                <div className={'flex flex-col gap-5'}>
                                    <h4 className={'text-white font-bold mt-5 text-3xl mb-3'}>Bande Annonce</h4>
                                    <iframe
                                        width="1024"
                                        height="576"
                                        src={`https://www.youtube.com/embed/${videos.results[0].key}`}
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    />
                                </div>
                            }
                        </div>

                        <aside className={'flex flex-col text-white h-fit gap-5'}>
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
