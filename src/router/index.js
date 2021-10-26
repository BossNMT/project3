const homePageRouter = require('./homePage');

function router(app) {
    app.use('/', homePageRouter);
}

module.exports = router