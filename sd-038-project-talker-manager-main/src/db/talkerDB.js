const conn = require('./connection');

const findAll = () => conn.execute(`SELECT * FROM talkers`);

const findById = (id) => conn.execute(
    `SELECT * FROM talkers WHERE id = ?`,
    [id],
);

module.exports = {
    findAll,
    findById
}