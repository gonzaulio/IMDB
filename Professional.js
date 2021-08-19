"use strict";
exports.__esModule = true;
exports.professional = void 0;
var professional = /** @class */ (function () {
    function professional(name, age, genre, weight, height, hairColor, eyeColor, race, isRetired, nationality, oscarsNumber, profession) {
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
    professional.prototype.printAll = function () {
        console.log("\n        Name: " + this.name + "\n        Age: " + this.age + "\n        Genre: " + this.genre + "\n        Weight: " + this.weight + "\n        Height: " + this.height + "\n        Hair Color: " + this.hairColor + "\n        Eye Color: " + this.eyeColor + "\n        Race: " + this.race + "\n        Is Retired?: " + this.isRetired + "\n        Nationality: " + this.nationality + "\n        Oscars number: " + this.oscarsNumber + "\n        Profession: " + this.profession);
    };
    return professional;
}());
exports.professional = professional;
