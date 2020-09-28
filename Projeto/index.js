const express = require('express');
const calcularData = require('./data.js');

const app = express();

app.use(express.json());

app.post('/calcularData', (req,res) => {
    let {dataInicial, dataFinal} = req.body;
    const result = {
        data_inicial: dataInicial,
        data_final: dataFinal,
        dias: calcularData(dataInicial, dataFinal)
    }
    res.json(result);
});


app.listen(3000, () => {
    console.log(`Date Calculator rodando em http://localhost:3000`);
  });