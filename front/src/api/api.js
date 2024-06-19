import axios from 'axios';
const axiosInstance = axios.create({
    baseURL: 'https://gorlo-games.ru/api/',
    headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
    },
});

export async function login(userName, password) {
    const response = await axiosInstance.post('Auth/login', {
        userName,
        password,
    });
    const responseData = await response.data;
    localStorage.setItem('token', responseData);
    return responseData;
}

export async function getCinemas() {
    const response = await axiosInstance.get('Cinema');
    const cinemas = await response.data;
    return cinemas.cinemas;
}

export async function getCinema(id) {
    const response = await axiosInstance.get(`Cinema/${id}`);
    const cinema = await response.data;
    return cinema;
}

export async function putMovie(movie) {
    const response = await axiosInstance.put(`Movies/${movie.id}`, movie);
    const responseData = await response.data;
    return responseData;
}

export async function postMovie(movieName, cinemaId) {
    const response = await axiosInstance.post(`Movies`, {
        name: movieName,
        cinemaId,
    });
    const responseData = await response.data;
    return responseData;
}

export async function deleteMovie(id) {
    const response = await axiosInstance.delete(`Movies/${id}`);
    const cinema = await response.data;
    return cinema;
}
