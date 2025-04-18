const { convertToISODate } = require('../utils/validDate');
const conn = require('./connection');

const findAll = () => conn.execute(`SELECT * FROM talkers`);

const findById = (id) => conn.execute(
    `SELECT * FROM talkers WHERE id = ?`,
    [id],
);

const insert = ( talk ) => conn.execute(
    `INSERT INTO talkers (name, age, watched_at, rate)
        VALUES (?, ?, STR_TO_DATE(?, '%d/%m/%Y'), ?)`,
    [talk.name, talk.age, talk.watchedAt, talk.rate],
);

module.exports = {
    findAll,
    findById,
    insert
}