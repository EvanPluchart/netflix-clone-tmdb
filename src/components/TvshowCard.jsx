import React from 'react';
import {Link} from "wouter";

export default function TvshowCard({ tvshow }) {
    return (
        <Link className={'flex flex-col items-center space-y-3 cursor-pointer'} href={'/series/' + tvshow.id}>
            <img
                src={`https://image.tmdb.org/t/p/w500${tvshow.poster_path}`}
                alt={tvshow.name}
                className="w-32 rounded-lg shadow-lg"
            />
            <h3 className={'w-32 text-white font-bold overflow-hidden text-ellipsis whitespace-nowrap'}>{tvshow.name}</h3>
        </Link>
    );
}
