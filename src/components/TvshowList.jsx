import React, { useEffect, useState } from 'react';
import Pagination from "./Pagination.jsx";
import {fetchTvshows} from "../services/api/tvshow.js";
import TvshowCard from "./TvshowCard.jsx";

export default function TvshowList(tvshows = undefined) {
    const [tvShows, setTvShows] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 500;

    useEffect(() => {
        if (tvshows.tvshows === undefined) {
            fetchTvshows(currentPage).then((tvShows) => {
                setTvShows(tvShows);
            });
        } else {
            setTvShows(tvshows.tvshows);
        }
    }, [currentPage]);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <div className="bg-zinc-900 px-6 md:px-72 py-6 flex">
                <div className="tvshow-list flex flex-wrap w-full items-center justify-center md:justify-normal gap-12 md:gap-8">
                    {tvShows.map((tvshow) => (
                        <TvshowCard key={tvshow.id} tvshow={tvshow} />
                    ))}
                </div>
            </div>

            {tvshows.tvshows === undefined && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            )}
        </>
    );
}
