const personService = require('../services/personService');

// ROUTE HANDLERS

module.exports.person_list = async (_, res) => {
    // Interface with service to get data
    const people = await personService.getAllPeople();
    // Render view
    res.render('people', { title: "The People Page", people });
}

module.exports.person_by_id = async (req, res) => {
    // Interface with service to get data
    const person = await personService.getPersonById(parseInt(req.params.id));
    // Render view
    res.render('people', { title: person.name, people: [person]});
}