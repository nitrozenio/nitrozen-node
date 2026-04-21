export default class NitrozenError extends Error {
    constructor(message, statusCode, errors) {
        super(message);
        this.name = 'NitrozenError';
        this.statusCode = statusCode || null;
        this.errors = errors || null;
    }
}
