var genre_dropdown = document.getElementById("genre-select");
var movieTitle = document.querySelector('#movie-search');
var titleSearch = document.querySelector('#searchbtn');
var clearSearch = document.querySelector('#clearbtn');
// var genreSearch = document.querySelector('#genre-results');

var clearSearchFeilds = function (event) {
  event.preventDefault();
  if(movieTitle.value != "")
      movieTitle.value ="";
}
 
/*const options = {
  method: 'GET',  //http method,GET PUT POST DELETE 
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzg5MzUzNzVhNGVmMTY0YWY0ZDliYTdhYWVhMGQ1YSIsInN1YiI6IjY1MTM4NTNmYzUwYWQyMDBjOTE4YzgzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SrcgoM8n2F5rggdya7kCA2Ca6_FV9OAtuXEkJpiXPBE'
  }
};*/

fetch('https://api.themoviedb.org/3/authentication', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

//This is used to pull a list of movie genres from tmdb api
fetch('https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=c78935375a4ef164af4d9ba7aaea0d5a', options)  //url endpoint
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
  
clearSearch.addEventListener('click', clearSearchFeilds);
titleSearch.addEventListener('click', movieSearch);
movieTitle.addEventListener('keydown', function(event)
{
  if (event.key === 'Enter') {
    console.log("enter");
    return movieSearch(event);
  }

});


// fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=' + genre, options)
//     .then(response => response.json())
//     .then(response => {
//        var movies = response.movies;
//        for( var i=0; i<movies.length ; i++)
//        {
//         var optionsEl = document.createElement("option");
//         optionsEl.textContent = movies[i].title;
//         genreSearch.append(optionsEl);
//        }

//       })
//       .catch(function (error) {
//         console.error(error);
//       }); 