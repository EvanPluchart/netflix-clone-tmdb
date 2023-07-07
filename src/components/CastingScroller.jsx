import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import CastingCard from "./CastingCard.jsx";

export default function CastingScroller({ cast }) {
    return (
        <div className={'flex flex-col gap-5 w-full'}>
            <h4 className={'text-white font-bold mt-5 text-3xl mb-3'}>Casting</h4>
            <div className={'flex gap-7 castScroller md:px-20'}>
                {cast.cast.slice(0, 5).map((actor) => (
                    <CastingCard actor={actor} />
                ))}

                <div className={'flex gap-4 items-center justify-center font-bold text-white text-xl'}>
                    <span>Afficher plus</span>
                    <FontAwesomeIcon icon={faChevronRight} className={'text-white'} />
                </div>
            </div>
        </div>
    );
}