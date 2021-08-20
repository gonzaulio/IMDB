import { imdb } from "./imdb";
import { Movie } from "./Movie";

let imdb1:imdb = new imdb([]);

let Avengers1:Movie = new Movie("Avengers", 2006, "USA", "Action");
Avengers1.completeData(["Robert Downey Jr.", "Chris Evans", "Chris Evans"], "Joss Whedon", "Stan Lee", "English", "Movie theaters", true, "Iron Man", "Marvel Studios", "Paramount Pictures");
imdb1.peliculas.push(Avengers1);

let JusticeLeague:Movie = new Movie("Justice League: Snyder's Cut", 2021, "USA", "Action");
JusticeLeague.completeData(["Henry Cavill", "Jared Leto", "Ben Affleck"], "Zack Snyder", "Chris Terrio", "English", "Movie theaters", false, "Superman", "DC Films", "HBO Max");
imdb1.peliculas.push(JusticeLeague);

let CaptainMarvel:Movie = new Movie("Captain Marvel", 2019, "USA", "Action");
CaptainMarvel.completeData(["Brie Larson", "Gemma Chan", "Jude Law"], "Anna Boden", "Ryan Fleck", "English", "Movie theaters", true, "Captain Marvel", "Marvel Studios", "Walt Disney Studios Motion Pictures");
imdb1.peliculas.push(CaptainMarvel);

imdb1.printAllMovies()
