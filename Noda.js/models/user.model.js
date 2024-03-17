const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    lastName: { type: String, required: true },
    roomNumber: { type: String, required: true },
    department: { type: String, required: true },
    computerBrand: { type: String, required: true } 
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
