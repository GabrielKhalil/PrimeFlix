import axios from "axios";
////https://api.themoviedb.org/3
//https://api.themoviedb.org/3/movie/now_playing?api_key=b0b546f6e801fafcd06e66d866cf125f

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;