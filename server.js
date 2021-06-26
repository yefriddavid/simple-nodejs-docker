const express = require('express');

const PORT = process.env.PORT || 80;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
  res.send('Hello World'  + process.env.NODE_ENV);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

