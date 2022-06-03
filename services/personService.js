const fs = require ('fs').promises;
const { isPerson } = require('../models/personModel');

const formatField = string => {
    const number = parseInt(string);
    return Number.isNaN(number) ? string : number;
}

const formatPerson = obj => {
    for (const [key, val] of Object.entries(obj)) {
        obj[key] = formatField(val)
    }
    return obj;
}

const getPeople = data => JSON.parse(data).people.map(person => formatPerson(person));

module.exports.getAllPeople = async () => {
    // Interface with database
    const data = await fs.readFile(`${__dirname}/../fakedata.json`);
    const people = getPeople(data);
    // Validate against model
    if (!people.every(person => isPerson(person))) {
        throw new Error("Invalid data type");
    };
    // Return data
    return people
}

module.exports.getPersonById = async (id) => {
    // Interface with database
    const data = await fs.readFile(`${__dirname}/../fakedata.json`);
    const people = getPeople(data);
    const person = people.find(person => person.id === id);
    // Validate against model
    if (!isPerson(person)) {
        // catches undefined (not found)
        throw new Error("Person not found!");
    }
    // Return data
    return person
}