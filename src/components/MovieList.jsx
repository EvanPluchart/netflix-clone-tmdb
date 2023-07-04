import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../services/api/index';
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
            <div className="bg-zinc-900 px-6 md:px-14 py-6 flex items-center justify-between">
                <div className="movie-list flex space-x-6 flex-wrap w-full">
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
