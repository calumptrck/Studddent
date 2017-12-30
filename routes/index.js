var express = require('express');
var router = express.Router();

import postController from './../controllers/postController'

let Post = require('./../models/Post')

/* GET home page. */
router.get('/', (req, res, next) => {
  console.log(req.cookies.votes);
  
  if (req.cookies.votes == undefined) {
    console.log('generating first visit cookie');
    res.cookie("votes","");
    res.cookie("votes",JSON.stringify({
      "up":[],
      "down":[]
    }));
    var cookieVotes = {
      "up":[],
      "down":[]
    };
  } else {
    var cookieVotes = JSON.parse(req.cookies.votes);
  }

  Post.find({}).sort([['votes.up', 'descending']]).exec((err, posts) => {
    if (err) {
      console.log(err);
    } else {
      res.render('index', {
          title: 'studddent.',
          posts: posts,
      });
    }
    console.log(posts[0]);
    
  });
  
});

router.post('/newpost', postController.post);


module.exports = router;
