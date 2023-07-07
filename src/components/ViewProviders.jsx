import React from 'react';

export default function ViewProviders({ providers }) {
    return (
        <div>
            <h4 className={'text-white font-bold mt-5 text-xl md:text-3xl mb-3'}>Regarder sur</h4>
            {!providers.results.FR ? <p className={'text-gray-400 text-md'}>Aucun résultat</p> :
                <div className={'flex flex-col gap-5'}>
                    <div className={'flex flex-col gap-2'}>
                        <h5 className={'text-white font-bold'}>Abonnement</h5>
                        <div className={'flex gap-2 flex-wrap'}>
                            {providers.results.FR?.flatrate.map((provider) => (
                                <img
                                    key={provider.provider_id}
                                    src={`https://image.tmdb.org/t/p/w500${provider.logo_path}`}
                                    alt={provider.provider_name}
                                    className="w-10 rounded-lg shadow-lg"
                                />
                            ))}
                        </div>
                    </div>


                    <div className={'flex flex-col gap-2'}>
                        <h5 className={'text-white font-bold'}>Location</h5>
                        {providers.results.FR.rent === undefined ? <p className={'text-gray-400'}>Aucune location</p> :
                            <>
                                <div className="flex gap-2 flex-wrap">
                                    {providers.results.FR?.rent.map((provider) => (
                                        <img
                                            key={provider.provider_id}
                                            src={`https://image.tmdb.org/t/p/w500${provider.logo_path}`}
                                            alt={provider.provider_name}
                                            className="w-10 rounded-lg shadow-lg"
                                        />
                                    ))}
                                </div>
                            </>
                        }
                    </div>

                    <div className={'flex flex-col gap-2'}>
                        <h5 className={'text-white font-bold'}>Achat</h5>
                        {providers.results.FR.buy === undefined ? <p className={'text-gray-400'}>Aucun achat</p> :
                            <div className="flex gap-2 flex-wrap">
                                {providers.results.FR?.buy.map((provider) => (
                                    <img
                                        key={provider.provider_id}
                                        src={`https://image.tmdb.org/t/p/w500${provider.logo_path}`}
                                        alt={provider.provider_name}
                                        className="w-10 rounded-lg shadow-lg"
                                    />
                                ))}
                            </div>
                        }
                    </div>
                </div>
            }
        </div>
    );
}
