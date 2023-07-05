export const API_KEY = '918cf721bb158af5394d0e3d28a0d184';

export function fetchMovies(pageNumber) {
    return fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${pageNumber}&language=fr-FR`
    )
        .then((response) => response.json())
        .then((data) => data.results)
        .catch((error) => console.error(error));
}

export function fetchMovieDetails(movieId) {
    return fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=fr-FR`)
        .then((response) => response.json())
        .then((data) => data)
        .catch((error) => console.error(error));
}

export function fetchMovieCredits(movieId) {
    return fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=fr-FR`)
        .then((response) => response.json())
        .then((data) => data)
        .catch((error) => console.error(error));
}

export function fetchMovieProviders(movieId) {
    return fetch(`https://api.themoviedb.org/3/movie/${movieId}/watch/providers?api_key=${API_KEY}`)
        .then((response) => response.json())
        .then((data) => data)
        .catch((error) => console.error(error));
}
