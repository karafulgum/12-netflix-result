import 'whatwg-fetch';
import data from './data';
import NetflixResultView from './views/netflix-result';

const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-form__input');
const searchResult = document.querySelector('.results-list');
const searchBtn = document.querySelector('.serach-form__btn');
const searchView = new NetflixResultView(searchResult, {});

fetch('http://netflixroulette.net/api/api.php?title=Attack%20on%20titan')
.then((searchResult) => searchResult.json())
.then((data) => {
  const movie = data;
  searchView.model = movie;
  searchView.render();
});

// searchBtn.addEventListener('click', searchBtn);

searchInput.addEventListener('submit', searchForm);
// fetch('http://netflixroulette.net/api/api.php?title=titanic');
// .then((searchResult) => searchResult.json())
// .then((data) => {
//   const movie = data;
//   searchView.model = movie;
//   searchView.render();
// });
