const express = require('express');
const { getHomepage, getABC, getDuyPhan, postCreateUser, getCreatePage, getUpdatePage} = require('../controllers/homeController')
const router = express.Router();

// Khai báo route
router.get('/', getHomepage)

router.get('/abc', getABC)

router.get('/duy', getDuyPhan)

router.get('/duyphan', (req, res) => {
  res.render('sample.ejs')
})

router.get('/create', getCreatePage)
router.post('/create-user', postCreateUser)

router.get('/update', getUpdatePage)

module.exports = router //export default