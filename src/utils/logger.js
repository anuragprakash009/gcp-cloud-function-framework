module.exports.info = function (...args) {
    const message = args.join(',').replace(',', ' ');
    console.info(`${new Date()} [INFO] ${message}`);
};

module.exports.error = function (...args) {
    const message = args.join(',').replace(',', ' ');
    console.error(`${new Date()} [ERROR] ${message}`);
};

module.exports.error = function (...args) {
    const message = args.join(',').replace(',', ' ');
    console.debug(`${new Date()} [DEBUG] ${message}`);
};

module.exports.warn = function (...args) {
    const message = args.join(',').replace(',', ' ');
    console.warn(`${new Date()} [WARN] ${message}`);
};
