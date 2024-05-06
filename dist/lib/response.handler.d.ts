import { Response } from 'express';
export declare class ResponseHandler {
    sendResponse(res: Response, statusCode: number, success: boolean, message: string, data?: object): Promise<void>;
    sendErrorResponse(res: Response, statusCode: number, message: string, data?: object, type?: string): Promise<void>;
}
