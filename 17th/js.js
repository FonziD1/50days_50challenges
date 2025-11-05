const API_URL =
  "https://api.themoviedb.ord/3/discover/movie?sort_by=popularity.desc&api_key=fbef62a4580c4a0c9f688d2e6d28d14f&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_URL =
  "https://api.themoviedb.ord/3/search/movie?api_key=fbef62a4580c4a0c9f688d2e6d28d14f&query=''";

const search = document.getElementById("search");
const form = document.getElementById("form");
const main = document.getElementById("main");
//Get initial movies

getMovies(API_URL);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  console.log(data.results);
}

function showMovies(movies) {
  main.innerHTML = "";

  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
         
        <img
          src="${IMG_PATH + poster_path}"
          alt="${title}"
        />
        <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getClassByRate(vote)}">${vote_average}</span>
        </div>
        <div class="overview">
          <h3>Overview</h3>
  ${overview}
        </div>
     `;
  });
}



form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.ariaValueMax;

  if (searchTerm && searchTerm !== "") {
    getMovies(SEARCH_URL + searchTerm);
  } else {
    window.location.reload();
  }
});

function getClassByRate(vote){
    if(vote >= 8) return 'green'
    else if(vote >= 5) return 'orange'
    else return 'red';
}