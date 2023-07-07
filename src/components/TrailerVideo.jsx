import React from 'react';

export default function TrailerVideo({ videos }) {
    return (
        <div>
            {videos === undefined || videos.results === undefined || videos.results.length === 0 ? <p className={'text-gray-400 text-md'}>Aucune bande annonce</p> :
                <div className={'flex flex-col gap-5'}>
                    <h4 className={'text-white font-bold mt-5 text-3xl mb-3'}>Bande Annonce</h4>
                    <iframe
                        className={'aspect-video'}
                        src={`https://www.youtube.com/embed/${videos.results[0].key}`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    />
                </div>
            }
        </div>
    );
}
