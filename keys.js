console.log('this is loaded');

exports.movies = {
    secret: "trilogy"
};

exports.spotify = {
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
};
  exports.bands = {
    id: process.env.BANDS_ID,
    secret: process.env.BANDS_SECRET
  };