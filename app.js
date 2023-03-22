const express = require('express');
const morgan = require('morgan');

const loanRouter = require('./routes/loanRoutes');

const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use('/', (req, res, next) => {
  console.log('Hello from the middleware 👋');
  next();
});

app.use('/', (req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use('/loans', loanRouter);

module.exports = app;