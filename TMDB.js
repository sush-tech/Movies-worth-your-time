//This is used to pull titles, movie ratings and posters from TMDB
fetch("https://api.themoviedb.org/3/genre/movie/list?language=en", options)
.then(response => response.json())
.then(data => 
  {
    console.log(data)
    const movies = data.results;
    const movieHolder = document.querySelector(".movieHolder");
    movies.forEach(movie => {
      
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
      moviePoster.src = movie.poster_path;
      moviePoster.alt = movie.title;

      const rate = document.createElement("span");
      rate.classList.add("rate");
      rate.innerText = `${movie.vote_average}/10`;

      movieRating.appendChild(rate);
      movieData.appendChild(movieTitle);
      movieData.appendChild(movieRating);
      movieData.appendChild(moviePoster);


      movieHolder.appendChild(movieData);
    });
  })
  .catch(error => {
    console.error("Error fetching movies:", error);
  });
