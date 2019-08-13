module.exports = class CustomError extends Error {
    constructor(message, httpStatusCode, businessStatusCode) {
        super(message);
        this.httpStatusCode = httpStatusCode;
        this.businessStatusCode = businessStatusCode;
    }
}
