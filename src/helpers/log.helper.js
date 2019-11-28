const infoEnable  = process.env.LOG_INFO_ENABLE;
const errorEnable = process.env.LOG_ERROR_ENABLE;
const warnEnable  = process.env.LOG_WARN_ENABLE;

const error = (functionName, error, contexMessage) => {
    if (errorEnable) {
        console.error(JSON.stringify({
            functionName,
            contexMessage,
            error: {
                message: error.message,
                ...error,
                stack: error.stack
            },
        }));
    }
}

const info = (functionName, contexMessage, detailsObject) => {
    if (infoEnable) {
        if (detailsObject) {
            console.info(JSON.stringify({
                functionName,
                contexMessage,
                detailsObject
            }));
        } else {
            console.info(`${functionName} - ${contexMessage}`);
        }
    }
}

const warn = (functionName, contexMessage, detailsObject) => {
    if (warnEnable) {
        if (detailsObject) {
            console.warn(JSON.stringify({
                functionName,
                contexMessage,
                detailsObject
            }));
        } else {
            console.warn(`${functionName} - ${contexMessage}`);
        }
    }
}

module.exports = {
    error,
    info,
    warn
};