const infoEnable = process.env.LOG_INFO_ENABLE;
const errorEnable = process.env.LOG_ERROR_ENABLE;
const warnEnable = process.env.LOG_WARN_ENABLE;

const error = (functionName, errorMessage, err) => {
    if (errorEnable) {
        const errorToLog = {
            name: err.name,
            message: err.message,
            stack: err.stack,
            ...err
        };
        console.error(`${functionName} - ${errorMessage}`, JSON.stringify(errorToLog));
    }
}

const info = (functionName, message) => {
    if (infoEnable) {
        console.info(`${functionName} - ${message}`);
    }
}

const warn = (functionName, message) => {
    if (warnEnable) {
        console.warn(`${functionName} - ${message}`);
    }
}

module.exports = {
    error,
    info,
    warn
};