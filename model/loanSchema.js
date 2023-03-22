const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
    customerName: String,
    phoneNumber: String,
    address: String,
    loanAmount: Number,
    interest: Number,
    loanTermYears: Number,
    loanType: String,
    description: String,
    createdDate: Date,
    insertedDate: Date
});

const Loan = mongoose.model('Loan', loanSchema);
module.exports = Loan;