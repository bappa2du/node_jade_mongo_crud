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
      {title : 'Test Form', comments : comments}
    );
  });
});
/* POST form. */
router.post('/', function(req, res) {
  new Comment({title : req.body.comment})
  .save(function(err, comment) {
    console.log(comment);
    res.redirect('form');
  });
});
/* Delete element*/
router.get('/delete_all',function(req,res){
	Comment.remove(function(err,comments){
		res.redirect('form');
	});
});
/*Delete Individual item*/
router.get('/delete/:id',function(req,res){
	var id = req.param('id');
	Comment.remove({_id:id},function(err,comments){
		res.redirect('/form');
	});
});
module.exports = router;