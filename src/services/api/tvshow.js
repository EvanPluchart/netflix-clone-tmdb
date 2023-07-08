import {API_KEY} from './movie';

export function fetchTvshows(pageNumber) {
    return fetch(
        `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&page=${pageNumber}&language=fr-FR`
    )
        .then((response) => response.json())
        .then((data) => data.results)
        .catch((error) => console.error(error));
}

export function fetchTvshowDetails(showId) {
    return fetch(`https://api.themoviedb.org/3/tv/${showId}?api_key=${API_KEY}&language=fr-FR`)
        .then((response) => response.json())
        .then((data) => data)
        .catch((error) => console.error(error));
}

export function fetchTvshowCredits(showId) {
    return fetch(`https://api.themoviedb.org/3/tv/${showId}/credits?api_key=${API_KEY}&language=fr-FR`)
        .then((response) => response.json())
        .then((data) => data)
        .catch((error) => console.error(error));
}

export function fetchTvshowProviders(showId) {
    return fetch(`https://api.themoviedb.org/3/tv/${showId}/watch/providers?api_key=${API_KEY}`)
        .then((response) => response.json())
        .then((data) => data)
        .catch((error) => console.error(error));
}

export function fetchTvshowVideos(showId) {
    return fetch(`https://api.themoviedb.org/3/tv/${showId}/videos?api_key=${API_KEY}&language=fr-FR`)
        .then((response) => response.json())
        .then((data) => data)
        .catch((error) => console.error(error));
}

export function fetchDiscoverTvshows(pageNumber) {
    return fetch(
        `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&page=${pageNumber}&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false`
    )
        .then((response) => response.json())
        .then((data) => data.results)
        .catch((error) => console.error(error));
}
