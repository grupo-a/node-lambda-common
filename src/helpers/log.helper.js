const infoEnable  = process.env.LOG_INFO_ENABLE;
const errorEnable = process.env.LOG_ERROR_ENABLE;
const warnEnable  = process.env.LOG_WARN_ENABLE;

const error = function(functionName, errorMessage, err){
    if (errorEnable)
        console.error(`${functionName} - ${errorMessage}`, err);
}

const info = function(functionName, message){
    if (infoEnable)
        console.info(`${functionName} - ${message}`);
}

const warn = function(functionName, message){
    if (warnEnable)
        console.warn(`${functionName} - ${message}`);
}

const audit = function (uuid, action, payloadWhere, payloadData) {
    console.info('AUDIT', JSON.stringify({'what': action, 'who': uuid, 'when': Date.now(), 'where': payloadWhere, 'payload': payloadData}));
}

module.exports = {
    error,
    info,
    warn,
    audit
  };