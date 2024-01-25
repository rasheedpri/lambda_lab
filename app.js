// app.js
const serverless = require("serverless-http");
const express = require('express');
const bodyParser = require('body-parser');
const employeesRoutes = require('./routes/employeesRoutes');
const cors = require('cors');

const app = express();
const port = 80;
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/', employeesRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports.handler = serverless(app);
