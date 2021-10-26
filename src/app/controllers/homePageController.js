class homePageController {
    home(req, res, next) {
        res.render('home/home')
    }

    blog(req, res, next) {
        res.render('blog/blog')
    }

    author(req, res, next) {
        res.render('author/author')
    }

    errorPage(req, res, next) {
        res.render('error/error')
    }

    forums(req, res, next) {
        res.render('author/forums')
    }

    forumsTopics(req, res, next) {
        res.render('author/forums-category')
    }

    forumsDetail(req, res, next) {
        res.render('author/forums-detail')
    }

    contact(req, res, next) {
        res.render('home/contact')
    }
}

module.exports = new homePageController;