import axios from 'axios';

const api = axios.create({
    baseURL: "https://restcountries.com/v3.1/",
    headers: {
        "Content-type": "application/json"
      }
});

export default api;
