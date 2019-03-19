import Navigation from './src/Navigation';
import Header from './src/Header';
import Content from './src/Content';
import Footer from './src/Footer';
import axios from 'axios';

var root = document.querySelector('#root');

root.innerHTML = ` 
    ${Header()}
    ${Navigation()}
    ${Content()}
    ${Footer()}
`;


axios({
    url: "https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/games",
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'user-key': 'f240634775f56f976cbbd49510dd14e3',
    },
    data: "fields age_ratings;"
  })
    .then(response => {
        console.log(response.data);
    })
    .catch(err => {
        console.error(err);
    });