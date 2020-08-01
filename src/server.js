const app = require('./app');

app.listen(process.env.WWW_PORT || 3000);

// eslint-disable-next-line no-console
console.log(`Server listening on port ${process.env.WWW_PORT}` || 3000);
