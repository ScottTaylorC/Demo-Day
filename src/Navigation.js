export default function Navigation(){
    return `
    <div id="Navigation">
         <ul>
            <li id="Home">Home</li>
            <li id="AllGames">All Games</li>
         </ul>
    </div>
`;
}

// import { lowerCase } from 'lodash';

// function linkBuilder(links){
//     var destination = '';

//     var linksHtml = links.map((link) => {
//         if(link !== 'Home'){
//             destination = lowerCase(link);
//         }

//         return `<li>
//             <a data-navigo href="./${destination}">
//                 ${link}
//             </a>
//         </li>
//         `;
//     }).join(' ');

//     return linksHtml;
// }

// export default function Navigation(links){
//     return `
// <div id="navigation">
//         <ul class="container">
//             ${linkBuilder(links)}
//         </ul>
//     </div>
// `;
// }