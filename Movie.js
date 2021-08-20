"use strict";
exports.__esModule = true;
exports.Movie = void 0;
var Movie = /** @class */ (function () {
    function Movie(title, releaseYear, nacionality, genre) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre;
    }
    Movie.prototype.printMovie = function () {
        console.log("\n        Title: " + this.title + "\n        Release Year: " + this.releaseYear + "\n        Actors: " + this.actors + "\n        Nacionality: " + this.nacionality + "\n        Director: " + this.director + "\n        Writer: " + this.writer + "\n        Language: " + this.language + "\n        Plataform: " + this.plataform + "\n        Is MCU?: " + this.isMCU + "\n        Main Character Name: " + this.mainCharacterName + "\n        Producer: " + this.producer + "\n        Distributor: " + this.distributor + "\n        Genre: " + this.genre);
    };
    Movie.prototype.completeData = function (actors, director, writer, language, plataform, isMCU, mainCharacterName, producer, distributor) {
        this.actors = actors;
        this.director = director;
        this.writer = writer;
        this.language = language;
        this.plataform = plataform;
        this.isMCU = isMCU;
        this.mainCharacterName = mainCharacterName;
        this.producer = producer;
        this.distributor = distributor;
    };
    return Movie;
}());
exports.Movie = Movie;
