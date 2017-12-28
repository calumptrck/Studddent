var express = require('express');
var router = express.Router();

import postController from './../controllers/postController'

let Post = require('./../models/Post')

/* GET home page. */
router.get('/', (req, res, next) => {
  Post.find({}).sort([['votes.up', 'descending']]).exec((err, posts) => {
    if (err) {
      console.log(err);
    } else {
      res.render('index', {
          title: 'Studddent',
          posts: posts,
      });
    }
    console.log(posts[0]);
    
  });
});

router.post('/newpost', postController.post);


module.exports = router;
