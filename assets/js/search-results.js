var backButton = document.getElementById('backbtn');
var favoritesButton = document.getElementById('favoritesbtn')
// Got this from the ai learning assistant
var searchParams = new URLSearchParams(window.location.search);
var movie = searchParams.get('q');
var titleEl = document.querySelector('#title');
var plotEl = document.querySelector('#plot');
var criticEl = document.querySelector('#critic-review');
//var popularityE1 = document.querySelector('#popularity');

fetch('http://www.omdbapi.com/?t=' + movie + '&apikey=806e9e92')
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        titleEl.textContent = "Movie Title: " + data.Title;
        plotEl.textContent = data.Plot;
        criticEl.textContent = "Metacritic Critic Review Score: " + data.Metascore;
      })
      .catch(function (error) {
        console.error(error);
});

/* fetch('https://api.themoviedb.org/3/genre/movie/list?language=en' + movie + '&apikey=c78935375a4ef164af4d9ba7aaea0d5a')
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        popularityE1.textContent = "Audience Score: " + data.popularity;
      })
      .catch(function (error) {
        console.error(error);
      }); */

backButton.addEventListener("click", function() {
  window.location.href = "./index.html";
});

favoritesButton.addEventListener("click", function() {
  var favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  favorites.push(movie);
  localStorage.setItem('favorites', JSON.stringify(favorites));
});
