const customError = require('http-errors');
const { Logger } = require('../../utils');

function registerUser(req, res) {
    Logger.info(
        'controller',
        'registerUser',
        `META_DATA: req.query: ${JSON.stringify(
            req.query
        )} req.body: ${JSON.stringify(req.body)}`
    );
    try {
        res.json({
            message: 'success'
        });
    } catch (error) {
        Logger.error(
            'controller',
            'registerUser',
            `META_DATA: req.query: ${JSON.stringify(
                req.query
            )} req.body: ${JSON.stringify(req.body)} ERROR_MSG: ${
                error.message
            } ERROR_STACK: ${error.stack}`
        );
        if (customError.isHttpError(error)) {
            throw error;
        }
        throw new customError.InternalServerError(error.message);
    }
}

module.exports = { registerUser };
