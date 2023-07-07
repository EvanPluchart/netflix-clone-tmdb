import React from 'react';
import AnonymousAvatar from "../assets/anonymous-avatar.jpg";

export default function ShowCastingActor({ actor }) {
    return (
        <div className={'flex gap-4'}>
            <div>
                {actor.profile_path === null ? (
                    <img
                        src={AnonymousAvatar}
                        alt={actor.name}
                        className={'rounded w-20 h-20 object-cover'}
                    />
                ) : (
                    <img
                        src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                        alt={actor.name}
                        className={'rounded w-20 h-20 object-cover'}
                    />
                )}
            </div>

            <div className="flex flex-col justify-center items-start">
                <p className={'text-gray-400 text-center font-bold text-sm overflow-hidden text-ellipsis'}>{actor.name}</p>
                <p className={'text-gray-400 text-center text-sm overflow-hidden text-ellipsis'}>{actor.character}</p>
            </div>
        </div>
    );
}