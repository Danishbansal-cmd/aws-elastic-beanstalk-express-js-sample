const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello this is the message used to display for the first time using aws codepipeline'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
