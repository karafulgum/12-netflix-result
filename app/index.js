import 'whatwg-fetch';
import data from './data';
import NetflixResultView from './views/netflix-result';

const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-form__input');
const searchResult = document.querySelector('.results-list');
const searchBtn = document.querySelector('.serach-form__btn');

const searchView = new NetflixResultView(searchResult, {});

function startSearch(term) {
  fetch(`http://netflixroulette.net/api/api.php?title=${term}`)
.then((searchResult) => searchResult.json())
.then((data) => {
  const movie = data;
  searchView.model = movie;
  searchView.render();
});
}
searchForm.addEventListener('submit', (ev) => {
  ev.preventDefault();

  startSearch(searchInput.value);
});

startSearch('Scrubs');

// searchBtn.addEventListener('click', searchBtn);

// searchInput.addEventListener('submit', searchForm);
// fetch('http://netflixroulette.net/api/api.php?title=titanic');
// .then((searchResult) => searchResult.json())
// .then((data) => {
//   const movie = data;
//   searchView.model = movie;
//   searchView.render();
// });
