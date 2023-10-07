var backButton = document.getElementById('backbtn');
var clearButton = document.getElementById('clearbtn')
var favTable = document.getElementById('favorites-table')

displayFavorites();

// Function to display the list of favorited movie titles
function displayFavorites() {
    // Retrieve the favorites array from local storage
    var favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  
    // Display the list of favorited movie titles on the favorites page
    favorites.forEach(movie => {
      var rowEl = document.createElement('tr');
      var titleEl = document.createElement('th');
      var genreEl = document.createElement('td');
      var popularityEl = document.createElement('td');
      var moviePage = document.createElement('a');
      moviePage.href = './search-results.html?q=' + encodeURIComponent(movie);
      moviePage.innerHTML = movie;

      moviePage.addEventListener('click', function(event) {
        event.preventDefault();
        var queryString = './search-results.html?q=' + encodeURIComponent(movie);
        location.assign(queryString);
      });

      fetch('https://www.omdbapi.com/?t=' + movie + '&apikey=806e9e92')
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        genreEl.innerHTML = data.Genre;
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
          popularityEl.innerHTML = data.results[0].popularity;
        })
        .catch(function (error) {
          console.error(error);
        });
      favTable.appendChild(rowEl);
      rowEl.appendChild(titleEl);
      rowEl.appendChild(genreEl);
      rowEl.appendChild(popularityEl);
      titleEl.appendChild(moviePage);
    });
}

backButton.addEventListener("click", function() {
    window.location.href = "./index.html";
});

clearButton.addEventListener("click", function() {
    localStorage.clear();
    favTable.remove();
    favTable.innerHTML = "";
});