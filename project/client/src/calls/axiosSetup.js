// src/calls/axiossetup.js
import axios from 'axios';
import { store } from '../redux/store';
import { setError } from '../redux/errorSlice';

export const axiosInstance = axios.create({
    headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${localStorage.getItem('token')}`
    }
});

axiosInstance.interceptors.response.use(
    response => response,
    error => {
        // Dispatch the error message to Redux
        const errorMessage = error.response
            ? error.response.data
            : error.message;
        store.dispatch(setError(errorMessage));

        return Promise.reject(error);
    }
);
