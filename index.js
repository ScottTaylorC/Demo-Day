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
    url: "https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/games/?search=dark_souls&fields=name,summary,storyline,rating,cover",
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
                <p>Cover: ${game.cover}</p>
                <p>Score: ${game.rating}/100</p>
                <p>Review: ${game.summary}</p>
            </li>           
            `;
        }

    })
    .catch(err => {
        console.error(err);
    });
