const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const serveStatic = require('serve-static');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const api = require('./routes/api.js')

app.use('/api', api);

if(process.env.NODE_ENV = 'production'){
  // Static Folder
  // app.use(express.static(__dirname + '/public/'));
  app.use(express.static(__dirname + '/public/'));

  // Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));