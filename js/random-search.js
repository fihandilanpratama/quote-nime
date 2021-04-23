import { cardComponent } from './functions/components.js';
import { Clipboard_CopyTo } from './functions/confiq.js';

// selector
const btnRandomSearch = document.querySelector('.btn-random-search');
const spinner = document.querySelector('.spinner-border');
const cardBodyContent = document.querySelector('.card-body-content');

btnRandomSearch.addEventListener('click', function() {
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
});

document.addEventListener('click', function(e) {
  if(e.target.className.includes('btn-copy-quote')) {
    const quote = e.target.previousElementSibling.textContent;
    Clipboard_CopyTo(quote);
    alert('quote copied!');
  }
});

// Random Quote
// Anime : NANA
// Character : Nana Komatsu
// Quote : No matter how much we think we want - it's never enough. I just want one thing to go right for me. I just need something to give me the energy so I can keep going.