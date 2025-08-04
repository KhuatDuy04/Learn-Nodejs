const express = require('express');
const router = express.Router();

// Khai báo route
router.get('/', (req, res) => {
  res.send('Hello World!')
})

router.get('/abc', (req, res) => {
  res.send('check abc')
})

router.get('/duyphan', (req, res) => {
  res.render('sample.ejs')
})

module.exports = router //export default