import axios from "axios";

export const getAllArticles = () => {

    return axios
    .get('https://nc-news-7ch2.onrender.com/api/articles')
    }