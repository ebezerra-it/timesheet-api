const routes = require('express').Router();

// routes
routes.get('/', (req, res) => {
  res.send({ message: 'Hello World' }).status(200);
});

module.exports = routes;
