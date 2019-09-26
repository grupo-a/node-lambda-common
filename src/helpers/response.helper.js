const createResponse = (body, statusCode, headers) => {
  const mergeHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
    'Content-Type': 'application/json; charset=utf-8',
    ...headers, 
  };
  return {
    statusCode,
    headers: mergeHeaders,
    body: JSON.stringify(body)
  };
};

const returnError = function (event, error) {
  const body = {
    error: {
      code: error.businessStatusCode || '500_internal-error-server',
      message: error.message
    },
    requestId: event.requestContext ?  event.requestContext.requestId : 'request-id-not-found'
  };
  const statusCode = error.httpStatusCode || 500;
  const headers = { };

  return createResponse(body, statusCode, headers)
}

const returnSucess = function (body, statusCode = 200, headers = {}) {
  return createResponseJSON(body, statusCode, headers)
}

module.exports = {
  returnError,
  returnSucess
};