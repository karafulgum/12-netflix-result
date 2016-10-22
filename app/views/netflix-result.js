export default class NetflixResultView {
  constructor(el, model) {
    this.el = el;
    this.model = model;

    this.element = document.createElement('div');
    this.element.classList.add('results-list"');
    this.element.innerHTML = `
      <div class="top">
        <div class="top__left">
          <h2 class="top__left--title"></h2>
          <h5 class="top__left--genre"></h5>
          <h3 class="top__left--rating"><i class="fa fa-star" aria-hidden="true"></i></h3>
        </div>
        <div class="results-list__item">
          <div class="result-frame"><img src="" alt="" class="result-frame__pic"></div>
        </div>
      </div>
      <div class="bottom">
        <div class="bottom__title">Summary</div>
        <p class="bottom__text bottom__text--summary"></p>
        <div class="bottom__title">Actors</div>
        <p class="bottom__text bottom__text--actors"></p>
      </div>`;
  }
  render() {
    this.el.querySelector('.top__left--title').innerText = this.model.show_title;
    this.el.querySelector('.top__left--genre').innerText = this.model.show_category;
    this.el.querySelector('.top__left--rating').innerText = this.model.rating;
    this.el.querySelector('.result-frame__pic').src = this.model.poster;
    this.el.querySelector('.bottom__text--summary').innerText = this.model.summary;
    this.el.querySelector('.bottom__text--actors').innerText = this.model.show_cast;
  }
}
