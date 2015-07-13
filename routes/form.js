var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Comment = mongoose.model('comments');

/* GET form. */
router.get('/form', function(req, res) {
  Comment.find(function(err, comments){
    console.log(comments);
    res.render(
      'form',
      {title : 'Jade Form', comments : comments}
    );
  });
});
/* POST form. */
router.post('/', function(req, res) {
  new Comment({
  	title : req.body.comment,
  	user : req.body.user
  })
  .save(function(err, comment) {
    console.log(comment);
    res.redirect('/');
  });
});
/* Delete element*/
router.get('/delete_all',function(req,res){
	Comment.remove(function(err,comments){
		res.redirect('/');
	});
});
/*Delete Individual item*/
router.get('/delete/:id',function(req,res){
	var id = req.param('id');
	Comment.remove({_id:id},function(err,comments){
		res.redirect('/');
	});
});
/*Edit individual element*/
router.get('/edit/:id',function(req,res){
	var id = req.param('id');
	Comment.findById({_id:id},function(err,comment){
		console.log(comment);
		res.render(
	      'edit',
	      {title : 'Edit Form', comment : comment}
	    );
	});
});
/*Update item*/
router.post('/update/:id',function(req,res){
	var id = req.param('id');
	Comment.update(
		{_id:id},
		{
			title : req.body.comment,
  			user : req.body.user
  		},
		function(err,comments){
		console.log(comments);
		res.redirect('/');
	});
});
module.exports = router;