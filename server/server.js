const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = 3000;
const fs = require('fs');
const runtimeController = require('./controller');

// pre-built middleware
app.use(express.json());
app.use(bodyParser.text());
app.use('/build', express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../src/index.html'));
})

app.post('/api/algoCode', runtimeController.scriptBuilder, runtimeController.scriptRunner, (req, res) => {
  return res.status(200).json(res.locals.res);
})

app.get('/api/data', runtimeController.getData, (req, res) => {
  return res.status(200);
})

app.use((req, res) => res.sendStatus(404));

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
