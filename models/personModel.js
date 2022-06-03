// MODEL
const personModel = {
    id: 'number',
    name: 'string',
    age: 'number'
}

// VALIDATOR
const isPerson = obj => {
    const personKeyVals = Object.entries(personModel);
    const hasRightKeys = personKeyVals.every(([key, type]) => typeof obj[key] === type);
    const onlyHasSameKeys = Object.keys(obj).length === personKeyVals.length;
    return hasRightKeys && onlyHasSameKeys
}

module.exports = { isPerson };