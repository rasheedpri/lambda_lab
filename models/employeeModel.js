const db = require('mysql');

const connection = db.createConnection({
  host: '172.31.47.118',
  user: 'rasheed',
  password: 'P@ssw0rd',
  database: 'employees'
});

connection.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL database');
});


exports.addemployee = (employee, callback) => {
  connection.query('INSERT INTO employees SET ?', employee, callback);
};
