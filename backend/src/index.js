const express = require('express');
const routes = require('./routes');
const cors = require('cors'); //5.2K (gzipped:2.1K)

const app = express();

app.use(cors())

app.use(express.json());

app.use(routes);

app.listen(3333);