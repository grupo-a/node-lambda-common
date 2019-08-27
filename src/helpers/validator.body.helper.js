const buildResponseErrorMessage = (errors) =>{

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
  throw new common.CustomError(responseMessage, 400, '400_bad-request-body');
};

const validateBody = (schema, body) => {
  const validatorInstance = new Validator();
  let validatorResult = validatorInstance.validate(body, schema);

  if (validatorResult.errors)
    buildResponseErrorMessage(validatorResult.errors);
};

module.exports = {
  validateBody
};