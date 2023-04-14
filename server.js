const express = require('express');
const PORT = process.env.PORT || 3000;
const db = require('./config/connection');
const api_routes = require('./routes/api_routes');

const app = express();

app.use(express.static('public'));
app.use(express.json());

app.use('/api', api_routes);

db.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Server listening on port %s', PORT));
});