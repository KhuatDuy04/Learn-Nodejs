const pool = require('../config/database');
const { getAllUsers, getUserById, updateUserById } = require('../services/CRUDService')

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

const getUpdatePage = async (req, res) => {
    const userId = req.params.id
    let user = await getUserById(userId)
    res.render('edit.ejs', { user: user })
}

const postUpdateUser = async (req, res) =>{
    let {email, name, city, id} = req.body
    await updateUserById(email, name, city, id)
    // res.send('update persons success')
    res.redirect('/')
}

module.exports = {
    getHomepage, getABC, getDuyPhan, postCreateUser, getCreatePage, getUpdatePage, postUpdateUser
}