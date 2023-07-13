import React from 'react';
import ShowCastingActor from "./ShowCastingActor.jsx";

export default function ShowCastingDetail({ casting }) {
    return (
        <div className={'flex flex-col md:flex-row px-10 md:px-20 '}>
            <div className={'flex flex-col flex-1 gap-4'}>
                <h1 className={'text-xl text-white font-bold'}>Acteurs</h1>
                <div className={'flex flex-col gap-2'}>
                    {casting.cast.map((actor) => (
                        <ShowCastingActor key={actor.name} actor={actor} />
                    ))}
                </div>
            </div>

            <div className={'flex flex-col flex-1 gap-4'}>
                <h1 className={'text-xl text-white font-bold'}>Equipe technique</h1>
                <div className={'flex flex-col justify-center gap-2'}>
                    {casting.crew.map((actor) => (
                        <ShowCastingActor key={actor.name + actor.credit_id} actor={actor} />
                    ))}
                </div>
            </div>
        </div>
    );
}