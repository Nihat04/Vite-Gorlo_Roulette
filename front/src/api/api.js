import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://localhost:7122/api/',
    headers: {
        'Content-Type': 'application/json',
        Authorization:
            'Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IlVzZXI3IiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiU3RhbmRhcnRVc2VyIiwiZXhwIjoxNzIwMTkzNTg0LCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo3MTIyIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzEyMiJ9.OoG331LRxmqgefq-bOwr2azbn83VZludMmrPXjQg-D9JCmdb0W23CDwOu7UCwtCuwsi9hOE5EZrB0tgcLPKUXA',
    },
});

export async function login(userName, password) {
    const response = await axiosInstance.post('Auth/login', {
        userName,
        password,
    });

    return response;
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