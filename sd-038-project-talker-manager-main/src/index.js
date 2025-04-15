const app = require('./app');

const PORT = process.env.PORT || '3001';

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(200).send();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});