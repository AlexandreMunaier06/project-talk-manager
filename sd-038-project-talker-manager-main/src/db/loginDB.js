const conn = require('./connection');

const login = (login) => conn.execute(
    `SELECT * FROM user WHERE email = ? && password = ?`,
    [login.email, login.password],
);

module.exports = {
    login
}