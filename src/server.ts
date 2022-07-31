import express from 'express';

const app = express();

app.listen(3333, () => {
  return console.log("Server executando na porta 3333!");
});