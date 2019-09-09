const returnError = function (event, error) {
  const code = error.businessStatusCode || '500_internal-error-server';

  return {
    statusCode: error.httpStatusCode || 500,
    body: JSON.stringify({
      error: {
        code,
        message: error.message
      },
      requestId: event.requestContext ?  event.requestContext.requestId : 'request-id-not-found'
    })
  };
}

const returnSucess = function (body, statusCode = 200, headers = {}) {
  return {
    statusCode,
    headers,
    body: JSON.stringify(body)
  };
}

module.exports = {
  returnError,
  returnSucess
};