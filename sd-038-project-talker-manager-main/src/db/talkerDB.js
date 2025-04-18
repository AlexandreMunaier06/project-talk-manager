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

const update = (id, talk) => conn.execute(
    `UPDATE talkers SET
    name = ?, age = ?, watched_at = STR_TO_DATE(?, '%d/%m/%Y'), rate = ?
    WHERE id = ?`,
    [talk.name, talk.age, talk.watchedAt, talk.rate, id],
);

const remove = (id) => conn.execute(
    `DELETE FROM talkers WHERE id = ?`,
    [id],
);

module.exports = {
    findAll,
    findById,
    insert,
    update,
    remove
}