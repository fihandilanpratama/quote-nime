import { mainPage, randomSearchPage, searchByKeywordPage, cardComponent, updateCardBodyContent } from './functions/components.js';
import { Clipboard_CopyTo, getQuotes } from './functions/utility.js';

const body = document.querySelector('#body');

document.addEventListener('click', async function (e) {
  e.preventDefault();
  if( e.target.textContent === "Home" ) body.innerHTML = mainPage(); 
  else if( e.target.textContent === "Search for Random Quote" ) body.innerHTML = randomSearchPage();
  else if( e.target.textContent === "Search by Character Name" ) body.innerHTML = searchByKeywordPage("enter a character's name");
  else if( e.target.textContent === "Search by Anime Title" ) body.innerHTML = searchByKeywordPage("enter an anime title");
  else if( e.target.className.includes("btn-random-search") ) {
    const cardBodyContent = document.querySelector('.card-body-content');
    const spinner = document.querySelector('.spinner-border');
    // kosongkan content
    cardBodyContent.innerHTML = '';
    // tampilkan spinner-loader
    spinner.classList.toggle('d-none');

    fetch('https://animechan.vercel.app/api/random')
          .then(response => response.json())
          .then(response => {
            // hilangkan spinner loader
            spinner.classList.toggle('d-none');
            // tampilkan / render content ke html
            cardBodyContent.innerHTML = cardComponent(response.anime, response.character, response.quote);
          });
  } else if( e.target.className.includes("btn-chara-search") ) {
    const inputKeyword = e.target.previousElementSibling.value;
    const spinner = document.querySelector('.spinner-border');
    const cardBodyContent = document.querySelector('.card-body-content');

    // kosongkan content
    cardBodyContent.innerHTML = '';
    // tampilkan spinner-loader
    spinner.classList.toggle('d-none');

    // true : the type of search is anime title based, false : the type of search is character's name based
    const typeOfSearch = e.target.previousElementSibling.placeholder.includes('anime');

    try {
      const arrQuote = await getQuotes(inputKeyword, typeOfSearch);
      updateCardBodyContent(arrQuote);
    } catch(err) {
      spinner.classList.toggle('d-none');
      alert(err);
    }
  } else if( e.target.className.includes("btn-copy-quote") ) {
    const quote = e.target.previousElementSibling.textContent;
    Clipboard_CopyTo(quote);
    alert('quote copied!');
  }
});


// Random Quote
// Anime : NANA
// Character : Nana Komatsu
// Quote : No matter how much we think we want - it's never enough. I just want one thing to go right for me. I just need something to give me the energy so I can keep going.