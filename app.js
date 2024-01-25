const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Last change in the repo for the full pipeline test'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
