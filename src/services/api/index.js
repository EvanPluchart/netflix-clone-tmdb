export const API_KEY = '918cf721bb158af5394d0e3d28a0d184';

export function fetchMovies(pageNumber) {
    return fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${pageNumber}&language=fr-FR`
    )
        .then((response) => response.json())
        .then((data) => data.results)
        .catch((error) => console.error(error));
}
