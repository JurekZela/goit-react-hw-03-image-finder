import axios from 'axios';

const API_KEY = '39684416-19726dcb7b6323782764f8c99';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export async function fetchImg (searchQuery, pages) {
    const separated = searchQuery.split('/');
    const extractedQuery = separated[1];

    const response = await axios.get('', { params: { 
        key: API_KEY,
        q: extractedQuery,
        page: pages,
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: 12,
     }});
    return response.data;
};