const mainPage = () => {
  return `<div class="container">
  <div class="row justify-content-center">
    <div class="col-lg-6">
      <div class="card link-card shadow-sm mb-4">
        <div class="card-body p-1">
          <div class="d-grid gap-1">
            <a class="btn btn-dark stretched-link fs-5" href="#" role="button">Search for Random Quote</a>
          </div>
        </div>
      </div>
      <div class="card link-card mb-4">
        <div class="card-body p-1">
          <div class="d-grid gap-1">
            <a class="btn btn-dark stretched-link fs-5" href="#" role="button">Search by Character Name</a>
          </div>
        </div>
      </div>
      <div class="card link-card">
        <div class="card-body p-1">
          <div class="d-grid gap-1">
            <a class="btn btn-dark stretched-link fs-5" href="#" role="button">Search by Anime Title</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;
}

const randomSearchPage = () => {
  return `<div class="container">
    <div class="row justify-content-center">
    <div class="col-lg-8">
      <div class="card shadow-sm mb-4">
        <div class="card-header" style="background-color: #ddd;">
          <span class="fw-bold fs-5 d-inline-block pt-1">Search Random Quote</span>
          <button type="button" class="btn btn-primary float-end btn-random-search">Search</button>
        </div>
        <div class="card-body fs-5" style="min-height: 120px;">
          <div class="text-center">
            <div class="spinner-border mt-3 d-none" role="status" style="width: 3rem; height: 3rem;">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
          <div class="card-body-content"></div>
        </div>
      </div>
    </div>
  </div>
</div>`;
}

const searchByKeywordPage = (placeHolderMsg) => {
  return `<div class="container">
  <div class="row justify-content-center">
    <div class="col-lg-8">
      <div class="card shadow-sm mb-4">
        <div class="card-header" style="background-color: #ddd;">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="${placeHolderMsg}" aria-label="Recipient's username" id="character-name-input">
            <button class="btn btn-primary btn-chara-search" type="button">Search</button>
          </div>
        </div>
        <div class="card-body fs-5" style="min-height: 120px; max-height: 340px; overflow: auto;">
          <div class="text-center">
            <div class="spinner-border mt-3 d-none" role="status" style="width: 3rem; height: 3rem;">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
          <div class="card-body-content"></div>
        </div>
      </div>
    </div>
  </div>
</div>`;
}

const cardComponent = (anime, chara, quote) => {
  return `<div class="row">
    <div class="col-lg-3 col-4">Anime</div>
    <div class="col-lg-9 col-8">: ${anime}</div>
  </div>
  <div class="row">
    <div class="col-lg-3 col-4">Character</div>
    <div class="col-lg-9 col-8">: ${chara}</div>
  </div>
  <div class="row">
    <div class="col-lg-3 col-4">Quote</div>
    <div class="col-lg-9 col-8" style="text-align: justify;">
      : <span>${quote}</span>
      <button class="btn btn-primary btn-sm btn-copy-quote">copy</button>
    </div>
  </div>`;
}

const updateCardBodyContent = (arrQuote) => {
  const cardBodyContent = document.querySelector('.card-body-content');
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

export { mainPage, randomSearchPage, searchByKeywordPage, cardComponent, updateCardBodyContent };