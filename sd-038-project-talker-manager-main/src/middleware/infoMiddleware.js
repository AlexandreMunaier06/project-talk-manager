const isValidDate = require("../utils/validDate");

module.exports = (req, res, next) => {
    const { name, age, watchedAt, rate } = req.body;

    if (name < 3) 
        res.status(400).json({ message: 'O campo \"name\" deve ter pelo menos 3 caracteres' });

    if (age < 18 || isNaN(age))
        res.status(400).json({ message: 'O campo \"age\" deve ser um numero e deve ser maior de idade' });

    if (!isValidDate(watchedAt))
        res.status(400).json({ message: 'O campo \"watchedAt\" deve ser uma data valida' });

    if (rate < 1 || rate > 5 || isNaN(rate))
        res.status(400).json({ message: 'O campo \"rate\" deve ser um numero entre 1 a 5' });

    next();
};