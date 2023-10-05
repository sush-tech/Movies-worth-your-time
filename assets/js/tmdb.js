const options = {
  method: 'GET',  //http method,GET PUT POST DELETE 
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzg5MzUzNzVhNGVmMTY0YWY0ZDliYTdhYWVhMGQ1YSIsInN1YiI6IjY1MTM4NTNmYzUwYWQyMDBjOTE4YzgzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SrcgoM8n2F5rggdya7kCA2Ca6_FV9OAtuXEkJpiXPBE'
  }
};

//This is used to pull titles, movie ratings and posters from TMDB
fetch("https://api.themoviedb.org/3/genre/movie/list?language=en", options)
.then(response => response.json())
.then(data => 
  {
    console.log(data)
    const movie = data.results;
    const movieHolder = document.querySelector(".movieHolder");
    const movieData = document.createElement("div");
    movieData.classList.add("movieData");
    
    //Pull in movie title
    const movieTitle = document.createElement("div");
    movieTitle.classList.add("movieTitle");
    movieTitle.innerText = movie.title;

    //Pull in movie ratings
    const movieRating = document.createElement("div");
    movieRating.classList.add("movieRating");
    
    //Pull in movie poster
    const moviePoster = document.createElement("img");
    moviePoster.classList.add("moviePoster");
    moviePoster.src = "https://image.tmdb.org/t/p/w500${movie.poster_path}";
    moviePoster.alt = movie.title;
    
    const rate = document.createElement("span");
    rate.classList.add("rate");
    rate.innerText = `${movie.vote_average}/10`;
    
    movieRating.appendChild(rate);
    movieData.appendChild(movieTitle);
    movieData.appendChild(movieRating);
    movieData.appendChild(moviePoster);
    
    movieHolder.appendChild(movieData);
  })
  .catch(error => {
    console.error("Error fetching movies:", error);
  });




  
