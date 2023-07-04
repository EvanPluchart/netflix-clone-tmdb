import React from 'react';
import {Link} from "wouter";

export default function MovieCard({ movie }) {
    return (
        <Link className={'flex flex-col items-center space-y-3 cursor-pointer'} href={'/films/' + movie.id}>
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-32 rounded-lg shadow-lg"
            />
            <h3 className={'w-32 text-white font-bold overflow-hidden text-ellipsis whitespace-nowrap'}>{movie.title}</h3>
        </Link>
    );
}
