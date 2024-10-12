import axios from "axios";
const apikey = import.meta.env.VITE_REACT_API_KEY;

export const $api = axios.create({
    baseURL: 'https://youtube-v31.p.rapidapi.com',
    headers: {
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
        'X-RapidAPI-Key': `${apikey}` // Replace with your own API key
    }
})