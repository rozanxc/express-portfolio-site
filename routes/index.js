// routes/index.js – handles all site page routes

var express = require('express');
var router = express.Router();

// Home
router.get('/', function(req, res) {
  res.render('pages/index', { title: 'Home' });
});

// About
router.get('/about', function(req, res) {
  res.render('pages/about', { title: 'About Me' });
});

// Projects
router.get('/projects', function(req, res) {
  res.render('pages/projects', { title: 'Projects' });
});

// Contact
router.get('/contact', function(req, res) {
  res.render('pages/contact', { title: 'Contact Me' });
});

module.exports = router;
