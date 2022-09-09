const httpStatus = require("http-status");
const { insert } = require("../services/Forms");
const eventEmitter = require("../scripts/events/eventEmitter");

const create = (req, res) => {
  insert(req.body)
    .then((response) => {
      res.status(httpStatus.OK).send({
        response
      });
    })
    .catch((error) => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
    });

};

module.exports = {
  create
};
