import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://transactions-ignite.vercel.app',
})