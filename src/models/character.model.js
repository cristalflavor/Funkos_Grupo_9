const { conn } = require('../config/conn');

const getCharacters = async () => {
    const data = conn.query('SELECT * FROM character');

    return data;
}

module.exports = {
    getCharacters
}