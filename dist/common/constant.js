"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONSTANT = exports.APP_CONFIG = exports.STATUS_MSG = exports.LOGGER_NAME = exports.RESPONSE_DATA = exports.RESPONSE_MSG = void 0;
const dotenv = require("dotenv");
dotenv.config();
const common_1 = require("@nestjs/common");
exports.RESPONSE_MSG = {
    SUCCESS: 'Success.',
    ERROR: 'Something went wrong.',
};
exports.RESPONSE_DATA = {
    SUCCESS: {
        statusCode: common_1.HttpStatus.OK,
        message: exports.RESPONSE_MSG.SUCCESS,
    },
    ERROR: {
        statusCode: common_1.HttpStatus.BAD_REQUEST,
        message: exports.RESPONSE_MSG.ERROR,
    },
};
exports.LOGGER_NAME = {
    LOGGER: 'LOGGER',
};
exports.STATUS_MSG = {
    ERROR: {
        BAD_REQUEST(message) {
            return {
                statusCode: 400,
                success: false,
                message: message,
                type: 'BAD_REQUEST',
            };
        },
    },
    SUCCESS: {
        statusCode: 200,
        success: true,
        message: 'Success',
    },
};
exports.APP_CONFIG = {
    port: process.env.PORT,
    userName: process.env.USER_NAME,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    localhostPort: process.env.LOCALHOST_PORT,
    postgres: process.env.POSTGRES,
    mongo_url: process.env.MONGO_URL,
    secret: process.env.JWT_SECRET,
    expires: process.env.JWT_EXPIRATION,
};
exports.CONSTANT = {
    API_VERSION: 'v1',
};
//# sourceMappingURL=constant.js.map