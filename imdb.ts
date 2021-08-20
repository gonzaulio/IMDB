import { Movie } from "./Movie";

export class imdb 
{
    public peliculas:Movie[] 

    constructor(peliculas:Movie[])
    {
        this.peliculas = peliculas
    }

    printAllMovies()
    {
        for (let index = 0; index < this.peliculas.length; index++) {
            this.peliculas[index].printMovie()            
        }
    }

}