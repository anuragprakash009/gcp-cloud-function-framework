async function expressLoader(app, express) {
    const patientRouter = require('../module/patient/router');
    const authRouter = require('../module/authentication/router');
    app.use(express.json());

    // auth routers
    app.use('/api/v1/auth', authRouter);

    // patient routers
    app.use('/api/v1/patient', patientRouter);

    // Error Handler Middleware
    app.use((error, req, res, next) => {
        console.log(req, next);
        res.status(error.status || 500).json({
            status: false,
            message: error.message,
            data: ''
        });
    });
    return app;
}

module.exports = { expressLoader };
