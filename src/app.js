const express = require('express');

class AppController {
  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(express.json());
  }

  routes() {
    // eslint-disable-next-line global-require
    this.express.use(require('./routes'));
  }
}

module.exports = new AppController().express;
