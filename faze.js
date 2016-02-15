//initializes the Javascript sdk
SC.initialize({
  client_id: e12aadc24a6277c40bfe890859917861
});

var genreVar = 'artist';




$(document).ready(function() {
    //SC.get is a method from the javascript sdk that refers to the type of HTTP request being made. 
  SC.get('/tracks', { genres: genreVar }, function(tracks) {
    $(tracks).each(function(index, track) {
    $('#results').append($('<li></li>').html(track.title + ' - ' + track.genre));
    });
  });
});

