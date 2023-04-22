import express from 'express';
import { handleGenerateNewShortUrl } from '../controller/urlController.js';

const router = express.Router();

// urls :
//router.get("/");

router.post("/", handleGenerateNewShortUrl);





export default router;