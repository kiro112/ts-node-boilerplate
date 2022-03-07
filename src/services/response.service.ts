import { Response } from 'express';
import { ApiResponse } from '../interfaces/common.interface';
import ResponseStore from '../helpers/response.store.helper';

/**
 * Send Response
 *
 * Sends response with a normalized payload
 * to the requesting client.
 *
 * @param {Response} res
 * @param {number} status
 * @param {string} message
 * @param {object | any[]}
 */
export const sendResponse = <T>(res: Response, status: number, message: string, result: T): void => {
    const apiResponse: ApiResponse<T> = {
        status,
        message,
        result,
    };

    ResponseStore.setApiResponse(apiResponse);

    res.status(status);
    res.json(apiResponse);
    res.end();
};
