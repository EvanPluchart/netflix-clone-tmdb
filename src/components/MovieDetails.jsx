import React from 'react';

export default function MovieDetails({ movie, cast }) {
    const date = new Date(movie.release_date);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMont = month < 10 ? `0${month}` : month;
    const releaseDate = `${formattedDay}/${formattedMont}/${year}`;

    return (
        <div className={'flex px-20 gap-10'}>
            <div>
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="w-120 rounded-lg shadow-lg"
                />
            </div>

            <div className={'flex flex-col'}>
                <div>
                    <h3 className={'text-white font-bold'}>{movie.title} <span className={'text-gray-500 font-normal'}>({year})</span></h3>
                    <p className={'text-gray-400 text-sm'}>{releaseDate} <span className={'font-bold'}>&middot;</span> {movie.genres.map((genre) => genre.name).join(', ')}</p>
                </div>

                <div>
                    <h4 className={'text-white font-bold mt-5'}>Synopsis</h4>
                    <p className={'text-gray-400 text-md'}>{movie.overview}</p>
                </div>
            </div>
        </div>
    );
}
