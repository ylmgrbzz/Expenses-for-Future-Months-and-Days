const Joi = require("joi");

const formValidation = Joi.object({
  expense: Joi.string(),
  name: Joi.string(),
  surname: Joi.string(),
  documentNo: Joi.number(),
  policyNo: Joi.number(),
  policyBegin:Joi.date(),
  policyFinish:Joi.date(),
  policyPrice: Joi.number(),
  // installmentNumber: Joi.number(),
  description: Joi.string(),
  calculationMethod: Joi.string(),

});


module.exports = {
  formValidation
};
