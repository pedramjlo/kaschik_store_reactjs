import axios from 'axios';

// Create an instance of axios
const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api', // Your backend URL
});

// Add a response interceptor
api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            const refreshToken = localStorage.getItem('refresh_token');
            try {
                const response = await api.post('/token/refresh/', { refresh: refreshToken });
                localStorage.setItem('access_token', response.data.access);
                originalRequest.headers['Authorization'] = 'Bearer ' + response.data.access;
                return api(originalRequest);
            } catch (refreshError) {
                return Promise.reject(refreshError);
            }
        }
        return Promise.reject(error);
    }
);

export default api;
