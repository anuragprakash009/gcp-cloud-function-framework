const express = require('express');
const app = express();
const { startApp } = require('./src/loader');

startApp(app, express);

exports.patientManagementSystem = app;
