var genre_dropdown = document.getElementById("genre-select");
var movieTitle = document.querySelector('#movie-search');
var titleSearch = document.querySelector('#searchbtn');
const options = {
  method: 'GET',  //http method,GET PUT POST DELETE 
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzg5MzUzNzVhNGVmMTY0YWY0ZDliYTdhYWVhMGQ1YSIsInN1YiI6IjY1MTM4NTNmYzUwYWQyMDBjOTE4YzgzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SrcgoM8n2F5rggdya7kCA2Ca6_FV9OAtuXEkJpiXPBE'
  }
};

//This is used to pull a list of movie genres from tmdb api
fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)  //url endpoint
    .then(response => response.json())
    .then(response => {
      //console.log(response)
      var genres = response.genres;
      //console.log(genres);
      for( var i=0;i<genres.length ; i++)
      {
        // console.log(genres[i].name);
        var optionEl = document.createElement("option");
        optionEl.textContent = genres[i].name;
        optionEl.value = genres[i].id;
        genre_dropdown.append(optionEl);
      }
    })
    .catch(err => console.error(err));
  
// This will return information about whatever movie is searched using t=[movie_title].
/*var movieSearch = function (event) {
  event.preventDefault();

  var movie = movieTitle.value.trim();
  var genre = genre_dropdown.value;
  var requestUrl = 'http://www.omdbapi.com/?t=' + movie + '&apikey=806e9e92';
  if (movie != "") {
    fetch(requestUrl)
    .then(function (response) {
      var queryString = './search-results.html';
      location.assign(queryString);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
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
}*/




titleSearch.addEventListener('click', movieSearch);