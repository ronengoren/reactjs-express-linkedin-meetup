require('dotenv').config()
var express = require('express');
var router = express.Router();
var request = require('request');
var key = process.env.MEETUP_API_KEY

/* GET users listing. */
router.get('/', function(req, res, next) {
  let text = req.query.text;
  request({
    uri: 'https://api.meetup.com/find/upcoming_events?key=' + key + '&sign=true&photo-host=public&page=20&text=' + text,
    // qs: {
      // key: '326d1a3e7c615d6f6f2752807a5f7b38',
      // query: 'World of Warcraft: Legion'
    // }
  }).pipe(res);
});
module.exports = router;