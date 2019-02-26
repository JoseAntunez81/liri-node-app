require("dotenv").config();
var fs = require('fs');
var keys = require("./keys.js");
var axios = require("axios");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
// console.log("testing keys", keys);

//=========================OMDB================================//

var action = process.argv[2];
var title = process.argv.slice(3).join("+");
// console.log(action);
// console.log(title);

var movieThis = function (movie) {
  var queryUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=" + keys.movies.secret;
  axios.get(queryUrl).then(
    function(response) {
     
      
      console.log("Movie title: " + response.data.Title + "\nThis movie came out in: " + response.data.Year + 
      "\nRating: " + response.data.Rated + "\nRotten tomatoes: " + response.data.Ratings[1].Value + 
      "\nCountry: " + response.data.Country + "\nLanguage: " + response.data.Language + 
       "\nPlot: " + response.data.Plot + "\nActors: " + response.data.Actors);
    }
  );
}




//===========================SPOTIFY=======================//
var spotifyThis = function (title) {

  spotify.search({ type: 'track', query: title, limit:1}, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }

   var songInfo = data.tracks.items;
  console.log("Artist(s): " + songInfo[0].artists[0].name);
  console.log("Song name: " + songInfo[0].name);
  console.log("Preview link: " + songInfo[0].preview_url);
  console.log("Album: " + songInfo[0].album.name);
  
  // console.log(songInfo[0]); 
  
  });
  
}

switch (action) {
  case "movie-this":
  movieThis(title);
    
    break;
  
  case "spotify-this-song":
  spotifyThis(title);
    
    break;

  default:
    break;
}






 



