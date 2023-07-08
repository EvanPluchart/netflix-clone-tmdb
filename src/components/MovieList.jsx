import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../services/api/movie.js';
import MovieCard from './MovieCard';
import Pagination from "./Pagination.jsx";

export default function MovieList() {
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 500;

    useEffect(() => {
        fetchMovies(currentPage).then((movies) => {
            setMovies(movies);
        });
    }, [currentPage]);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <div className="bg-zinc-900 px-6 md:px-72 py-6 flex">
                <div className="movie-list flex flex-wrap w-full items-center justify-center md:justify-normal gap-12 md:gap-8">
                    {movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </>
    );
}
