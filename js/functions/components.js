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

export const navbar = () => {
  return `<div class="container">
  <a class="navbar-brand mr-0 pr-0" href="#">
    <h5>Aniquote</h5>
  </a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ms-auto">
      <li class="nav-item">
        <a class="nav-link active d-inline-block ps-0">About</a>
      </li>
      <li class="nav-item me-2">
        <a class="nav-link active" href="#" data-bs-toggle="modal" data-bs-target="#addModal" data-bs-backdrop="static" data-bs-keyboard="true">Add Assignment</a>
      </li>
    </ul>
  </div>
</div>`;
}