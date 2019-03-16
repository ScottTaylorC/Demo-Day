import Navigation from './src/Navigation';
import Header from './src/Header';
import Content from './src/Content';
import Footer from './src/Footer';

var root = document.querySelector('#root');

root.innerHTML = ` 
    ${Header()}
    ${Navigation()}
    ${Content()}
    ${Footer()}
`;