import { Router } from 'express';

import authController from './auth.controller.js';
import loginDto from './middlewares/loginDto.js';

const router = Router();

router.post('/login', [loginDto], authController.login);
router.post('/refresh-token', authController.refreshToken);
router.post('/logout', authController.logout);

export default router;
