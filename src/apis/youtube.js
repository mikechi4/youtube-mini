import axios from 'axios';

const KEY = 'AIzaSyCHr6LfRi-aF-wP32NDSRCf41wIM6tmrAQ';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});