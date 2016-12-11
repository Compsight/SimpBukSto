var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SimpBukSto' });
});

router.get('/api/v1/users', function(req,res, next) {
  res.json({id: 1, title: 'The Fixation of Belief', authors: ['Charles Sanders Pierce'], categories: ['philosophy', 'essay']})
})

router.post('/api/v1/users', function(req,res, next) {
  res.json(req.body)
})

module.exports = router;
