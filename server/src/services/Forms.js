const Forms = require("../models/Forms");
const eventEmitter = require("../scripts/events/eventEmitter");

const insert = async (data) => {
  try {
    await Forms.create(data);
    return data;
  } catch (error) {
    throw error;
  }
};


module.exports = {
  insert
};
