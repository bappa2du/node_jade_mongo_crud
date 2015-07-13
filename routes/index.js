var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Comment = mongoose.model('comments');

/* GET home page. */
router.get('/', function(req, res, next) {
	Comment.find(function(err, comments){
    console.log(comments);
    res.render(
      'index',
      {title : 'Jade Form', comments : comments}
    );
  });
});

module.exports = router;
