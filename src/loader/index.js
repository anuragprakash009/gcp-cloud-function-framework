const { databaseConnection } = require('./db-connection-loader');
const { expressLoader } = require('./express-loader');
const { Logger } = require('../utils');

async function startApp(app, express) {
    await databaseConnection();
    Logger.info('startApp', 'Connected to database successfully');
    await expressLoader(app);
    Logger.info('startApp', 'Function loaded successfully');
}

module.exports = { startApp };
