const express = require('express');
const app = express();
const environment = require('./config/environment');

const verifyRoutes = require('./routes/verifyRoutes');
const errorHandler = require('./middlewares/errorHandler');

const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.originalUrl}`);
  next();
});

app.use('/api/verify', verifyRoutes);

app.use(errorHandler);

app.listen(environment.port, () => {
  console.log(`Server is running on port ${environment.port}`);
});
