import { RequestHandler } from 'express';

const results = 'hello world';

export const readTitles: RequestHandler = async (_req, res) => {
    try {
        res.status(200).send(results);
    } catch (error) {
        res.status(500).send('HTTP 500 - Unable to get titles');
    }
};


