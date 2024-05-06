import { HttpStatus } from '@nestjs/common';
export declare const RESPONSE_MSG: {
    SUCCESS: string;
    ERROR: string;
};
export declare const RESPONSE_DATA: {
    SUCCESS: {
        statusCode: HttpStatus;
        message: string;
    };
    ERROR: {
        statusCode: HttpStatus;
        message: string;
    };
};
export declare const LOGGER_NAME: {
    LOGGER: string;
};
export declare const STATUS_MSG: {
    ERROR: {
        BAD_REQUEST(message: string): {
            statusCode: number;
            success: boolean;
            message: string;
            type: string;
        };
    };
    SUCCESS: {
        statusCode: number;
        success: boolean;
        message: string;
    };
};
export declare const APP_CONFIG: {
    port: string;
    userName: string;
    host: string;
    database: string;
    password: string;
    localhostPort: string;
    postgres: string;
    mongo_url: string;
    secret: string;
    expires: string;
};
export declare const CONSTANT: {
    API_VERSION: string;
};
