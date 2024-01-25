const db = require('../models/employeeModel');

exports.addemployee = (req, res) => {
  const { empId, empFirstName, empLastName, empAge, empImage } = req.body;
  const employee = { empId, empFirstName, empLastName, empAge, empImage };

  db.addemployee(employee, (err, result) => {
    if (err) {
      throw err;
    }
    res.send('Employee details added successfully');
  });
};
