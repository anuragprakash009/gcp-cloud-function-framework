function databaseConnection() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Database connection established');
            resolve(true);
        }, 5000);
    });
}

module.exports = { databaseConnection };
