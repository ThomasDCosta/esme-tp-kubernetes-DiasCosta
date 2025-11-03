const express = require('express');
const app = express();
const port = 3000;

const APP_ENV = process.env.APP_ENV || 'development';
const LOG_LEVEL = process.env.LOG_LEVEL || 'debug';
const MESSAGE = process.env.MESSAGE || '';

console.log(`App running on port ${port} in ${APP_ENV} mode`);
console.log(`Log level: ${LOG_LEVEL}`);
console.log(MESSAGE);

app.get('/', (req, res) => {
  res.send(`
    <h1>Hello ESME DevOps 2025!</h1>
    <p>Application déployée le: ${new Date().toISOString()}</p>
    <p>Version: 2.0.0</p>
    <p>Environnement: ${APP_ENV}</p>
    <p>Log Level: ${LOG_LEVEL}</p>
    <p>Message: ${MESSAGE}</p>
  `);
});

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    env: APP_ENV,
    logLevel: LOG_LEVEL,
    message: MESSAGE,
    timestamp: new Date().toISOString()
  });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`App running on port ${port} in ${APP_ENV} mode`);
  console.log(`Log level: ${LOG_LEVEL}`);
  console.log(MESSAGE);
});
