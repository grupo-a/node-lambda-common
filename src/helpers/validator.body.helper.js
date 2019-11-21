const Validator = require('jsonschema').Validator;
const CustomError = require('../model/CustomError');

const _buildResponseErrorMessage = (errors) =>{
  let responseMessage = '';
  for (let i = 0; i < errors.length; i++) {
    const error = errors[i];
    if(error.property == 'instance'){
      responseMessage += error.message.replace(/"/g,'');
    }else{
      error.property = error.property.replace('instance.', '');
      responseMessage += `${error.property} ${error.message.replace(/"/g,'')}`;
    }
    if (i < errors.length - 1){
      responseMessage += ' || ';
    }
  }
  responseMessage = responseMessage.replace(/\\\\b/g, '').replace(/\\\\/g, '');
  throw new CustomError(responseMessage, 400, '400_bad-request-body');
};

const _validate = (schema, jsonObject) => {
  const validatorInstance = new Validator();
  let validatorResult = validatorInstance.validate(jsonObject, schema);

  if (validatorResult.errors.length > 0) {
    _buildResponseErrorMessage(validatorResult.errors);
  }

  return validatorResult.instance;
};

const validateBody = (schema, body) => {
  return _validate(schema, JSON.parse(body));
};

const validateObject = (schema, jsonObject) => {
  return _validate(schema, jsonObject);
};

module.exports = {
  validateBody,
  validateObject
};