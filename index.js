const express = require('express');
const app = express();

app.use('*', (req, res, next) => {
  res.send('<h1>Hello there 5th timme after delete  nodejs-app-deployment and nodejs-app-service! from local VSCode wassup</h1>');
});

app.listen(4000, () => {
  console.log('App listening on port 4000');
});