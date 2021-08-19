export class professional {
    public name:string
    public age:number
    public genre:string
    public weight:number
    public height:number
    public hairColor:string
    public eyeColor:string
    public race:string
    public isRetired:boolean
    public nationality:string
    public oscarsNumber:number
    public profession:string

    constructor(name:string, age:number, genre:string, weight:number, height:number, hairColor:string, eyeColor:string, race:string, isRetired:boolean, nationality:string, oscarsNumber:number, profession:string)
    {
        this.name = name;
        this.age = age;
        this.genre = genre;
        this.weight = weight;
        this.height = height;
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
        this.race = race;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
    }

    printAll()
    {
        console.log(`
        Name: ${this.name}
        Age: ${this.age}
        Genre: ${this.genre}
        Weight: ${this.weight}
        Height: ${this.height}
        Hair Color: ${this.hairColor}
        Eye Color: ${this.eyeColor}
        Race: ${this.race}
        Is Retired?: ${this.isRetired}
        Nationality: ${this.nationality}
        Oscars number: ${this.oscarsNumber}
        Profession: ${this.profession}`);
    }
}