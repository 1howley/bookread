import express from 'express';
import { getUsers, addBook } from '../controllers/book';

const router = express.Router();

router.get('/', getUsers)

router.post('/', addBook)

export default router;