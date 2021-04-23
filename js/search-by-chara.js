import { getQuotes } from './functions/confiq.js';
import { Clipboard_CopyTo } from './functions/confiq.js';

const btnSearch = document.querySelector('.btn-search');
const spinner = document.querySelector('.spinner-border');
const cardBodyContent = document.querySelector('.card-body-content');

btnSearch.addEventListener('click', async function(e) {
  const inputKeyword = e.target.previousElementSibling.value;

  // kosongkan content
  cardBodyContent.innerHTML = '';
  // tampilkan spinner-loader
  spinner.classList.toggle('d-none');

  try {
    const arrQuote = await getQuotes(inputKeyword);
    updateUI(arrQuote);
  } catch(err) {
    spinner.classList.toggle('d-none');
    alert(err);
}
});

const updateUI = (arrQuote) => {
  let i = 1;
  cardBodyContent.innerHTML += `
  <div class="row">
    <div class="col-lg-3 col-4">Anime</div>
    <div class="col-lg-9 col-8">: ${arrQuote[0].anime}</div>
  </div>
  <div class="row">
    <div class="col-lg-3 col-4">Character</div>
    <div class="col-lg-9 col-8">: ${arrQuote[0].character}</div>
  </div>
  <div class="row">
    <div class="col-lg-3 col-4">Quote</div>
    <div class="col-lg-9 col-8 text-quote">:</div>
  </div>
  <div class="row mt-2">
    <div class="col">
      <div class="card border">
        <ul class="list-group list-group-flush">
          ${arrQuote.map(a => `<li class="list-group-item">
            <div class="row">
              <div class="col-2 col-lg-1" col-md-2>${i++}</div>
              <div class="col-10 col-lg-11 col-md-10" style="text-align: justify;">
                <span>${a.quote}</span>
                <button class="btn btn-primary btn-sm btn-copy-quote">copy</button>
              </div>
            </div>
          </li>`).join('')}
        </ul>
      </div>
    </div>
  </div>`;
}

document.addEventListener('click', function(e) {
  if(e.target.className.includes('btn-copy-quote')) {
    const quote = e.target.previousElementSibling.textContent;
    Clipboard_CopyTo(quote);
    alert('quote copied!');
  }
});