import express from 'express';
const router = express.Router();
import { readTitles } from './titles';

router.route('/titles/').get(readTitles);

export default router;