var genre_dropdown = document.getElementById("genre-select");
var movieTitle = document.querySelector('#movie-search');
var titleSearch = document.querySelector('#searchbtn');
var movie;

// This will return information about whatever movie is searched using t=[movie_title].
var movieSearch = function (event) {
    event.preventDefault();
  
    var movie = movieTitle.value.trim();
    var genre = genre_dropdown.value;
    var requestUrl = 'http://www.omdbapi.com/?t=' + movie + '&apikey=806e9e92';
    var requestUrl2 = 'https://api.themoviedb.org/3/genre/movie/list?language=en' + movie + '&apikey=c78935375a4ef164af4d9ba7aaea0d5a'

    if (movie != "") {
      fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        var queryString = './search-results.html?q=' + encodeURIComponent(movie);
        location.assign(queryString);
      })
      .catch(function (error) {
        console.error(error);
      });
        fetch(requestUrl2)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        var queryString = './search-results.html?q=' + encodeURIComponent(movie);
        location.assign(queryString);
      })
      .catch(function (error) {
        console.error(error);
      });
    } else if (genre != "") {
      fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=' + genre, options)
      .then (function (response) {
        return response.json();
      })
      .then (function (data) {
        console.log(data);
      })
      .catch(function (error) {
        console.error(error);
      });  }
  }
