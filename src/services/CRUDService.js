const pool = require('../config/database');
const getAllUsers = async () => {
    let [results, fields] = await pool.query('select * from Persons');
    return results;
}

module.exports = {
    getAllUsers
}