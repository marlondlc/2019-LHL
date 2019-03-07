var library = {
  tracks: {
    t01: {
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three"
    },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003"
    },
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952"
    }
  },
  playlists: {
    p01: { id: "p01", name: "Coding Music", tracks: ["t01", "t02"] },
    p02: { id: "p02", name: "Other Playlist", tracks: ["t03"] }
  }
};

// FUNCTIONS TO IMPLEMENT:
console.log("---------------------------1FUNCTION------------------------------");

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {
  var playlists = library.playlists;

  for (var playlist in playlists) {
    console.log(
      playlists[playlist].id + ": ", playlists[playlist].name + " - ", playlists[playlist].tracks.length + " tracks");
  }
};
printPlaylists();
console.log("------------------------------------------------------------");
console.log("-----------------------2ndFUNCTION---------------------------");

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
  var newTlist = library.tracks;

  for (var list in newTlist) {
    console.log(
      newTlist[list].id, " :", newTlist[list].name, "by ", newTlist[list].artist, "(", newTlist[list].album, ")");
  }
};

printTracks();

console.log("------------------------------------------------------------");
console.log("------------------3RD FUNCTION-------------------------------");
// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
  var p = library.playlists[playlistId];
  console.log(playlistId, ":", p.name, " - ", p.tracks.length, "tracks")

  for (var trackEl of p.tracks) {
    var pathToTrack = library.tracks[trackEl]
    console.log(pathToTrack.id, ":", pathToTrack.name, "by", pathToTrack.artist, "(", pathToTrack.album, ")")
  }

}

printPlaylist("p01");


console.log("----------------------------------------------------------------");
console.log("---------------------------4FUNCTION------------------------------");

var getPlaylistById = function (playlistId) {

  return library.playlists[playlistId]

}

var addTrackToPlaylist = function (trackId, playlistId) {
  var playList = getPlaylistById(playlistId)
  playList.tracks.push(trackId);
  console.log(playList)

}

var trackId = 't03';
var playlistId = 'p01';
addTrackToPlaylist('t03', 'p01');

// generates a unique id
// (use this for addTrack and addPlaylist)
var uid = function () {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};



console.log("-------------------------------------------------------------------");
console.log("----------------------------5FUNCTION------------------------------");
// adds a track to the library

var addTrack = function (name, artist, album) {

  var trackId = "t" + uid()

  var newTrack = {
    id: trackId,  //for the following lines (3) i removed the duplicated word which you can do ex(name : name)
    name, // 1st arg in func
    artist, // 2nd arg in func
    album,// 3rd arg in func
  }
  console.log(newTrack);
  library.tracks[trackId] = newTrack;
}

addTrack("DBTF", "Kanye West", "Dark beautiful twisted")

console.log("-------------------------------------------------------------------");
console.log("------------------------------6FUNCTION----------------------------");


var uid = function () {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};
// adds a playlist to the library
var addPlaylist = function (name) {

  var playlistId = "P" + uid()

  var newPlaylist = {
    id: playlistId,
    name: name,
    tracks: []
  }
  console.log(newPlaylist);
  library.playlists[playlistId] = newPlaylist;

}
addPlaylist('summer Vibes')

console.log("-------------------------------------------------------------------");
console.log("------------------------------7FUNCTION----------------------------");

  // STRETCH:
  // given a query string string, prints a list of tracks
  // where the name, artist or album contains the query string (case insensitive)
  // tip: use "string".search("tri")
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

  //var printSearchResults = function (query) { };