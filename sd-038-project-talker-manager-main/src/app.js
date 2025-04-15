const express = require('express');
const taskRoutes = require('./routes/talkerRoutes');
const loginRoutes = require('./routes/loginRoutes');

const app = express();

app.use(express.json());

app.use('/talker', taskRoutes);
app.use('/login', loginRoutes);

module.exports = app;