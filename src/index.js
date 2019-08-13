const responseHelper = require('./helpers/response.helper');
const logger         = require('./helpers/log.helper');

const customError = require('./helpers/CustomError');

module.exports = {
  helpers: {
    response: responseHelper,
    logger: logger
  },
  customError
};