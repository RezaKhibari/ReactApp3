import axios from 'axios';

// Base URL of your PHP API
const API = axios.create({
    baseURL: 'http://localhost/blog-api',
});

export default API;