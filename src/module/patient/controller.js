const customError = require('http-errors');
const { Logger } = require('../../utils');

function getpatients(req, res) {
    Logger.info(
        'controller',
        'getpatients',
        `META_DATA: req.query: ${JSON.stringify(
            req.query
        )} req.body: ${JSON.stringify(req.body)}`
    );
    try {
        return res.json({
            message: 'OK'
        });
    } catch (error) {
        Logger.error(
            'controller',
            'getpatients',
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

module.exports = { getpatients };
