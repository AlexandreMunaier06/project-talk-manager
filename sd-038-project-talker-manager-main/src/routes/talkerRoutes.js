const express = require('express');
const TalkerBD = require('../db/talkerDB');

const router = express.Router();

router.get('/', async (_req, res) => {
    try {
        const [result] = await TalkerBD.findAll();
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: sqlMessage });
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await TalkerBD.findById(id);
        if (result > 0) {
            res.status(200).json(result);
        } else {
            res.status(404).json({message: "Pessoa palestrante não encontrada"});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({message: sqlMessage});
    }
});

module.exports = router;