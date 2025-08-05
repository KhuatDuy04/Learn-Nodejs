require('dotenv').config();
const express = require('express'); //commonjs
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web')
const pool = require('./config/database');

const app = express(); // app express
const port = process.env.PORT || 3001; // port => hardcode
const hostname = process.env.HOST_NAME;

//config template engine
configViewEngine(app)

//Khai báo route
app.use('/', webRoutes)

async function testDb() {
  try {
    const [results, fields] = await pool.query('SELECT * FROM Users u');
    console.log('>>>results =', results);
  } catch (err) {
    console.error('DB error:', err);
  }
}

testDb();

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})