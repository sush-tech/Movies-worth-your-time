var backButton = document.getElementById('backbtn');
var favTable = document.getElementById('favorites-table')

// Function to display the list of favorited movie titles
function displayFavorites() {
    // Retrieve the favorites array from local storage
    var favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  
    // Display the list of favorited movie titles on the favorites page
    favorites.forEach(title => {
      // Create a title element and attach an event listener
      var titleElement = document.createElement('th');
      titleElement.textContent = title;
      titleElement.addEventListener('click', () => {
        // Retrieve the movie data for the clicked title and display it
        var queryString = './search-results.html?q=' + encodeURIComponent(movie);
        location.assign(queryString);
      });
  
      // Append the title element to the favorites page
      favTable.appendChild(titleElement);
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