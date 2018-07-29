var express = require('express');
var router = express.Router();
var request = require('request');

var myAPIKey = process.env.MYAPIKEY;
/* GET users listing. */
router.get('/', function(req, res, next) {
  request({
    uri: 'https://api.meetup.com/find/groups?' + key + '&sign=true&photo-host=public&text=Computer+&page=20',
    qs: {
      key: '123456',
    }
  }).pipe(res);
	// Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
  // res.json([{
  // 	id: 1,
  // 	username: "samsepi0l"
  // }, {
  // 	id: 2,
  // 	username: "D0loresH4ze"
  // }]);
});

module.exports = router;