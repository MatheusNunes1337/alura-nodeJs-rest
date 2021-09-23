const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'matheus',
    password: '123456',
    database: 'agenda-petshop'
})

module.exports = conexao