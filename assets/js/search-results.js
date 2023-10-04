var backButton = document.getElementById('backbtn');
var searchParams = new URLSearchParams(window.location.search);
var movie = searchParams.get('movie');

fetch('http://www.omdbapi.com/?t=' + movie + '&apikey=806e9e92')
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      })
      .catch(function (error) {
        console.error(error);
      });

backButton.addEventListener("click", function() {
    window.location.href = "./index.html";
});