export class Movie
{
    public title:string
    public releaseYear:number
    public actors:string[]
    public nacionality:string
    public director:string
    public writer:string
    public language:string
    public plataform:string
    public isMCU:boolean
    public mainCharacterName:string
    public producer:string
    public distributor:string
    public genre:string

    constructor(title:string, releaseYear:number, nacionality:string, genre:string)
    {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre;
    }

    printMovie()
    {
        console.log(`
        Title: ${this.title}
        Release Year: ${this.releaseYear}
        Actors: ${this.actors}
        Nacionality: ${this.nacionality}
        Director: ${this.director}
        Writer: ${this.writer}
        Language: ${this.language}
        Plataform: ${this.plataform}
        Is MCU?: ${this.isMCU}
        Main Character Name: ${this.mainCharacterName}
        Producer: ${this.producer}
        Distributor: ${this.distributor}
        Genre: ${this.genre}`);
        
    }

    completeData(actors:string[], director:string, writer:string, language:string, plataform:string, isMCU:boolean, mainCharacterName:string, producer:string, distributor:string)
    {
        this.actors = actors;
        this.director = director;
        this.writer = writer;
        this.language = language;
        this.plataform = plataform;
        this.isMCU = isMCU;
        this.mainCharacterName = mainCharacterName;
        this.producer = producer;
        this.distributor = distributor;
    }
}
