import { Router } from 'express';

import isAdminApi from '../common/middlewares/isAdminApi.js.js';
import isAuthorizedApi from '../common/middlewares/isAuthorizedApi.js';
import authController from './auth.controller.js';
import loginDto from './middlewares/loginDto.js';

const router = Router();

router.post('/login', [loginDto], authController.login);
router.post('/refresh-token', authController.refreshToken);
router.post('/logout', authController.logout);

router.get('/test', [isAuthorizedApi, isAdminApi], (req, res) => {
  res.send('OK');
});

export default router;
