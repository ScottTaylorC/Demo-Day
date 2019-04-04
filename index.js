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
    data: "fields *; where id = (11133,1026);"
  })
    .then(response => {
        console.log(response.data);
        var content = document.getElementById('Content');
        for(const game of response.data) {
            console.log(game);
            var rating = game.total_rating;
            rating = Math.round(rating*1) /1;
            content.innerHTML += `
            <li id="${game}" class="game-home">
                <h1>Name: ${game.name}</h2>
                <p>Score: ${rating}/100</p>
                <p2>Review: ${game.summary}</p2>
            </li>           
            `;
        }

    })
    .catch(err => {
        console.error(err);
    });
