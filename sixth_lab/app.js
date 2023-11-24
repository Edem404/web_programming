const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

const db = require('./db');
const routes = require('./routes');

app.use('/', routes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});