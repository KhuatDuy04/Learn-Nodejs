const pool = require('../config/database');
const { getAllUsers } = require('../services/CRUDService')

const getHomepage = async (req, res) => {
    let results = await getAllUsers();
    return res.render('home.ejs', { listUsers: results })
}

const getABC = (req, res) => {
    res.send('abc')
}

const getDuyPhan = (req, res) => {
    res.send('duyphan')
}

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

const postCreateUser = async (req, res) => {
    let {email, name, city} = req.body

    let [results, fields] = await pool.query(
        `INSERT INTO Persons (email, name, city) VALUES (?, ?, ?) `, [email, name, city]
    );

    console.log(results);
    res.send('create persons success')
}

const getUpdatePage = (req, res) => {
    res.render('edit.ejs')
}

module.exports = {
    getHomepage, getABC, getDuyPhan, postCreateUser, getCreatePage, getUpdatePage
}