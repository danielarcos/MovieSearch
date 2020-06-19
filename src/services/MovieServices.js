import { BASE_URL, API_KEY } from '../constants'

export const getMovieByNameAndYear = (name, year) =>{
    const yearUrl = year ? '&y=' + year : '';
    const url = BASE_URL + name.trim().replace(' ', '+') + yearUrl + API_KEY;

    return fetch(url)
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                const errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .catch(error => error.message);
}