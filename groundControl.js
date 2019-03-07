
var movies = ["black Pather", "spider-man", "lego", "glass"]



function map(movies, callback) {


    var newArr = []
    movies.forEach(function (el) {
        newArr.push(callback(el))
    })
    console.log(newArr) // should be "return newArr;"

}

map(movies, function (movie) {
    return movie.length;
});
console.log("----------------------------------")
map(movies, function (movie) {
    return movie.toUpperCase();
});
console.log("----------------------------------")
map(movies, function (movie) {
    return movie.split('').reverse().join('');
});
console.log("----------------------------------")
