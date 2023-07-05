import React from 'react';

export default function MovieDetails({ movie, cast, providers }) {
    const date = new Date(movie.release_date);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMont = month < 10 ? `0${month}` : month;
    const releaseDate = `${formattedDay}/${formattedMont}/${year}`;

    console.log('movie', movie)
    console.log('cast', cast)
    console.log('providers', providers.results)

    return (
        <div className={'flex px-20 gap-10'}>
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
                    <p className={'text-gray-400 text-md'}>{releaseDate} <span className={'font-bold'}>&middot;</span> {movie.genres.map((genre) => genre.name).join(', ')}</p>
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
    );
}
