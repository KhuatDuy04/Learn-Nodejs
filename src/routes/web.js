const express = require('express');
const { getHomepage, getABC, getDuyPhan } = require('../controllers/homeController')
const router = express.Router();

// Khai báo route
router.get('/', getHomepage)

router.get('/abc', getABC)

router.get('/duy', getDuyPhan)

router.get('/duyphan', (req, res) => {
  res.render('sample.ejs')
})

module.exports = router //export default