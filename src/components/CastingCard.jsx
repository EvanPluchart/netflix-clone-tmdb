import React from 'react';

export default function CastingCard({ actor }) {
    return (
        <div key={actor.id + actor.name} className={'flex flex-col items-center bg-zinc-800 rounded-lg gap-2'}>
            <img
                key={actor.id}
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt={actor.name}
                className="w-32 rounded-lg shadow-lg"
            />
            <div className={'w-32 flex flex-col items-center justify-center p-2'}>
                <p className={'text-gray-400 text-center font-bold text-sm overflow-hidden text-ellipsis'}>{actor.name}</p>
                <p className={'text-gray-400 text-center text-sm overflow-hidden text-ellipsis'}>{actor.character}</p>
            </div>
        </div>
    )
}
