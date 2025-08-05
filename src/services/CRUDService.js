const pool = require('../config/database');
const getAllUsers = async () => {
    let [results, fields] = await pool.query('select * from Persons');
    return results;
}

const getUserById = async (userId) => {
    let [results, fields] = await pool.query(`select * from Persons where id = ?`, [userId])
    let user = results && results.length > 0 ? results[0] : {}
    return user;
}

const updateUserById = async (email, name, city, id) => {
    let [results, fields] = await pool.query(
        `UPDATE Persons SET email = ?, name = ?, city = ? WHERE id = ?`, [email, name, city, id]
    );
}

const DeleteUserById = async (id) => {
    let [results, fields] = await pool.query(
        `DELETE FROM Persons WHERE id = ?`, [id]
    );
}

module.exports = {
    getAllUsers, getUserById, updateUserById, DeleteUserById
}