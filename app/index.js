import 'whatwg-fetch';
import data from './data';
import NetflixResultView from './views/netflix-result';

const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-form__input');
const searchResult = document.querySelector('.results-list');

const searchView = new NetflixResultView(searchResult, {});
