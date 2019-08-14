const responseHelper = require('./helpers/response.helper');
const logger         = require('./helpers/log.helper');

const customError = require('./model/CustomError');

module.exports = {
  helpers: {
    response: responseHelper,
    logger: logger
  },
  customError
};