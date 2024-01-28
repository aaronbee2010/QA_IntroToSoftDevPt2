const movies = [
    { title: "Jaws", director: "Steven Spielberg", year: "1975" },
    { title: "Star Wars", director: "George Lucas", year: "1977" },
    {
        title: "Avengers: Infinity War",
        director: "Anthony and Joe Russo",
        year: "2018"
    },
    { title: "Top Gun", director: "Tony Scott", year: "1986" },
    { title: "Justice League", director: "Zack Snyder", year: "2017" }
];

// Part 1 - Create a function to find a movie and output it's detail
// function findMovie(movieTitle) {
//     for (const movie of movies) {
//         if (movie.title === movieTitle) {
//             console.log(`Title: ${movie.title}, Director: ${movie.director}, Year: ${movie.year}`);
//         }
//         console.log(movie);
//     }
//     // console.log(movie); // Uncaught ReferenceError: movie is not defined
// }
// findMovie("Star Wars");
// // console.log(movie); // Uncaught ReferenceError: movie is not defined
// let movie = "Thor: Ragnarok";
// console.log(movie); // "Thor: Ragnarok"
// findMovie(movie);


// Part 2 = Create a function to return a movie object
function returnMovie(movieTitle) {
    for (const movie of movies) {
        if (movie.title == movieTitle) {
            return movie;
        }
        console.log(movie);
    }
    return "Movie not found";
}

function myMovieDetails(anyMovie) {
    if (typeof anyMovie === "object") {
        return `Title: '${anyMovie.title}', Director: '${anyMovie.director}', Year: '${anyMovie.year}'`;
    } else {
        return anyMovie;
    }
}

let myMovie = returnMovie("Avengers: Infinity War");
console.log(myMovie);

console.log(`Title: '${myMovie.title}', Director: '${myMovie.director}', Year: '${myMovie.year}'`);

let myOtherMovie = returnMovie("Thor: Ragnarok");
console.log(myOtherMovie);

console.log(myMovieDetails(myOtherMovie));

console.log(myMovieDetails(returnMovie("Jaws")));




