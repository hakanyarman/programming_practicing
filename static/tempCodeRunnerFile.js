'use strict';

const mysql = require('mysql');

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'hakan',
  password: 'Hakan.971',
  database: 'first_database'
});

let sqlSorgusu = `SELECT (2 + 3) AS sonuc`;

connection.connect(function (err) {
  if (err) throw err;

  console.log('MySQL bağlantısı başarıyla gerçekleştirildi.');

  connection.query(sqlSorgusu, function (err, results, fields) {
    if (err) throw err;

    console.log(results);

  });

});