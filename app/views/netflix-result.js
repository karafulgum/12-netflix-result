export default class NetflixResultView {
  constructor(el, model) {
    this.el = el;
    this.model = model;
  }

  render() {
    this.el.querySelector('.top__left--title').innerText = this.model.show_title;
    this.el.querySelector('.top__left--genre').innerText = this.model.category;
    this.el.querySelector('.top__left--rating').innerText = this.model.rating;
    this.el.querySelector('.result-frame__pic').src = this.model.poster;
    this.el.querySelector('.bottom__text--summary').innerText = this.model.summary;
    this.el.querySelector('.bottom__text--actors').innerText = this.model.show_cast;
  }
}
