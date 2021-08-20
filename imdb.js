"use strict";
exports.__esModule = true;
exports.imdb = void 0;
var imdb = /** @class */ (function () {
    function imdb(peliculas) {
        this.peliculas = peliculas;
    }
    imdb.prototype.printAllMovies = function () {
        for (var index = 0; index < this.peliculas.length; index++) {
            this.peliculas[index].printMovie();
        }
    };
    return imdb;
}());
exports.imdb = imdb;
