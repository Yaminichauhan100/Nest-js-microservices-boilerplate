import * as dotenv from 'dotenv';
import { HttpStatus } from '@nestjs/common';
dotenv.config();

export const RESPONSE_MSG = {
  SUCCESS: 'Success.',
  ERROR: 'Something went wrong.',
};
export const RESPONSE_DATA = {
  SUCCESS: {
    statusCode: HttpStatus.OK,
    message: RESPONSE_MSG.SUCCESS,
  },
  ERROR: {
    statusCode: HttpStatus.BAD_REQUEST,
    message: RESPONSE_MSG.ERROR,
  },
};
export const LOGGER_NAME = {
  LOGGER: 'LOGGER',
};
export const CONSTANT = {
  API_VERSION: 'v1',
};

export const STATUS_MSG = {
  ERROR: {
    BAD_REQUEST(message: string) {
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

export const APP_CONFIG = {
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
