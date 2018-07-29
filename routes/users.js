require('dotenv').config()
var express = require('express');
var router = express.Router();
var request = require('request');
var key = process.env.MEETUP_API_KEY
/* GET users listing. */
router.get('/', function(req, res, next) {
  request({
    uri: 'https://api.meetup.com/find/groups?key=' + key + '&sign=true&photo-host=public&text=Computer+Software&page=20',
    // qs: {
      // key: '326d1a3e7c615d6f6f2752807a5f7b38',
      // query: 'World of Warcraft: Legion'
    // }
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