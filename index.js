import Navigation from './src/Navigation';
import Header from './src/Header';
import Content from './src/Content';
import Footer from './src/Footer';
import axios from 'axios';
// import Navigo from 'navigo';
// import * as State from './state';
// import { startCase } from 'lodash';

var root = document.querySelector('#root');
// var router = new Navigo(location.origin);

// function render(){
    root.innerHTML = ` 
        ${Navigation()}
        ${Header()}
        ${Content()}
        ${Footer()}
    `;


//     router.updatePageLinks();
// }

// function navHandler(params){
//     var destination = startCase(params.page);

//     render(State[destination]);
// }

// router
//     .on('/:page', navHandler)
//     .on('/', () => navHandler({ 'page': 'Home' }))
//     .resolve();

axios({
    url: "https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/games",
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'user-key': 'f240634775f56f976cbbd49510dd14e3',
    },
    data: "fields *; where id = (11133,1011,7360);"
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
