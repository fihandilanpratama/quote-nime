export const cardComponent = (anime, chara, quote) => {
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
    <div class="col-lg-9 col-8 text-quote">
      : <span>${quote}</span>
      <button class="btn btn-primary btn-sm btn-copy-quote">copy</button>
    </div>
  </div>`;
}