const express = require('express');
const router = express.Router()
const homePageController = require('../app/controllers/homePageController');

router.get('/contact', homePageController.contact);
router.get('/author/forums/topics/lorem-ipsum-is-simply-dummy-text', homePageController.forumsDetail);
router.get('/author/forums/topics', homePageController.forumsTopics);
router.get('/author/forums', homePageController.forums);
router.get('/author', homePageController.author);
router.get('/blog', homePageController.blog);
router.get('/', homePageController.home);
router.get('*', homePageController.errorPage);

module.exports = router