import express from 'express';

const app = express();

app.get('/api', (req, res) => {
  res.status(200).send({});
});

app.listen(3000, () => {
  console.log('Servidor escutando...');
});
