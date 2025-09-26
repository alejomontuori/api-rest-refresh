const mysql = require('mysql2');


const db = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'apicurso', 
});

db.connect((err) => {
    if (err) {
        throw err.stack;
    }
    console.log('Base de datos conectada');
});

module.exports = db;