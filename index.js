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
    data: "fields *;"
  })
    .then(response => {
        console.log(response.data);
        var content = document.getElementById('Content');
        for(const game of response.data) {
            console.log(game);
            content.innerHTML += `
            <li id="${game.slug}" class="game-item">
                Name: ${game.name}
                <p>Score: ${game.popularity}/10</p>
                <p>Review: ${game.summary}</p>
            </li>           
            `;
        }

    })
    .catch(err => {
        console.error(err);
    });