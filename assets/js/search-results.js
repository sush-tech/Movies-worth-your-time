var backButton = document.getElementById('backbtn');
var favoritesButton = document.getElementById('favoritesbtn')
// Got this from the ai learning assistant
var searchParams = new URLSearchParams(window.location.search);
var movie = searchParams.get('q');
var titleEl = document.querySelector('#title');
var plotEl = document.querySelector('#plot');
var criticEl = document.querySelector('#critic-review');
var tomatoEl = document.querySelector('#tomato-review');
var imdbEl = document.querySelector('#imdb-review');
var popularityEl = document.querySelector('#popularity');
var posterEl = document.querySelector('#poster')

fetch('https://www.omdbapi.com/?t=' + movie + '&apikey=806e9e92')
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        titleEl.textContent = "Movie Title: " + data.Title;
        plotEl.textContent = data.Plot;
        criticEl.textContent = "Metacritic Critic Review Score: " + data.Metascore;
        tomatoEl.textContent = "Rotten Tomatoes Critic Review Score: " + data.Ratings[1].Value;
        imdbEl.textContent = "IMDB Review Score: " + data.Ratings[0].Value;
      })
      .catch(function (error) {
        console.error(error);
});

fetch('https://api.themoviedb.org/3/search/movie?api_key=c78935375a4ef164af4d9ba7aaea0d5a&query=' + movie + '&include_adult=false&language=en-US&page=1')
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          popularityEl.textContent = "TMDB Audience Popularity Score: " + data.results[0].popularity;
          posterEl.src = 'https://image.tmdb.org/t/p/w185/' + data.results[0].poster_path;
        })
        .catch(function (error) {
          console.error(error);
});

backButton.addEventListener("click", function() {
  window.location.href = "./index.html";
});

favoritesButton.addEventListener("click", function() {
  var favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  favorites.push(movie);
  localStorage.setItem('favorites', JSON.stringify(favorites));
});
