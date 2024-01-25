const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: '34.235.111.65',
  user: 'rasheed',
  password: 'P@ssw0rd',
  database: 'employees',
  connectionLimit: 10, // Adjust the limit based on your requirements
});

const addEmployee = async (employee) => {
  const connection = await pool.getConnection();
  try {
    await connection.query('INSERT INTO employees SET ?', employee);
  } finally {
    connection.release();
  }
};

exports.addEmployeeHandler = async (event, context) => {
  try {
    const { empId, empFirstName, empLastName, empAge, empImage } = JSON.parse(event.body);
    const employee = { empId, empFirstName, empLastName, empAge, empImage };

    await addEmployee(employee);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Employee details added successfully' }),
    };
  } catch (error) {
    console.error('Error:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal Server Error' }),
    };
  }
};
