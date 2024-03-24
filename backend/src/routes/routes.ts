import express from 'express';
import { getUsers } from '../controllers/book';

const router = express.Router();

router.get('/', getUsers)

export default router;