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
      var rowEl = document.createElement('tr')
      var titleElement = document.createElement('th');
      titleElement.innerHTML = movie;
      titleElement.addEventListener('click', () => {
        var queryString = './search-results.html?q=' + encodeURIComponent(movie);
        location.assign(queryString);
      });
      favTable.appendChild(rowEl);
      rowEl.appendChild(titleElement);
    });
}

// Function to retrieve the movie data by title
/*function getMovieDataByTitle(title) {
    // Retrieve the favorites array from local storage
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  
    // Find the movie object with the matching title
    let movie = favorites.find(movieTitle => movieTitle === title);
  
    // Return the movie object
    return movie;
}*/

backButton.addEventListener("click", function() {
    window.location.href = "./index.html";
});

clearButton.addEventListener("click", function() {
    localStorage.clear();
    favTable.remove();
    favTable.innerHTML = "";
});