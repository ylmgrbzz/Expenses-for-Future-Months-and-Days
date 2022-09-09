const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema(
  {
    expense: String,
    name: String,
    surname: String,
    documentNo: Number,
    policyNo: Number,
    policyBegin:Date,
    policyFinish:Date,
    policyPrice: Number,
    installmentNumber: Number,
    description: String,
    calculationMethod: String,
  },
  { timestamps: true, versionKey: false }
);

const Forms = mongoose.model("Forms", FormSchema);
module.exports = Forms;
