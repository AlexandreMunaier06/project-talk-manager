const express = require('express');
const loginDB = require('../db/loginDB');
const randomString = require('../utils/randomString');

const router = express.Router();

const token = randomString(16);

router.post('/', async (req, res) => {
    const { email, password } = req.body;
    const login = { email, password };
    try {
        const [result] = await loginDB.login(login);
        console.log(result);
        if (result.length > 0) {
            res.status(200).json({ token: token });
        } else {
            res.status(400).json({ message: 'Email ou senha incorretos' })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({message: sqlMessage});
    }
});

module.exports = router;