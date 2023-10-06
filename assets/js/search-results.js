var backButton = document.getElementById('backbtn');
var favoritesButton = document.getElementById('favoritesbtn')
// Got this from the ai learning assistant
var searchParams = new URLSearchParams(window.location.search);
var movie = searchParams.get('q');
var titleEl = document.querySelector('#title');
var plotEl = document.querySelector('#plot');
var criticEl = document.querySelector('#critic-review');

const options = {
  method: 'GET',  //http method,GET PUT POST DELETE 
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzg5MzUzNzVhNGVmMTY0YWY0ZDliYTdhYWVhMGQ1YSIsInN1YiI6IjY1MTM4NTNmYzUwYWQyMDBjOTE4YzgzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SrcgoM8n2F5rggdya7kCA2Ca6_FV9OAtuXEkJpiXPBE'
  }
};

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

backButton.addEventListener("click", function() {
  window.location.href = "./index.html";
});

favoritesButton.addEventListener("click", function() {
  var favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  favorites.push(movie);
  localStorage.setItem('favorites', JSON.stringify(favorites));
});