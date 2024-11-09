import { Router } from 'express';

import isAdminRoute from '../common/middlewares/isAdminRoute.js';
import isAuthorizedRoute from '../common/middlewares/isAuthorizedRoute.js';
import createUserDto from './middlewares/create-user.dto.js';
import updateUserDto from './middlewares/update-user.dto.js';
import userController from './user.controller.js';

const router = Router();

router.get('/', [isAuthorizedRoute, isAdminRoute], userController.viewAll);
router.get('/crear', [isAuthorizedRoute, isAdminRoute], userController.viewCreate);
router.get('/:userDocument', [isAuthorizedRoute, isAdminRoute], userController.viewEdit);
router.post('/', [isAuthorizedRoute, createUserDto, isAdminRoute], userController.post);
router.put('/', [isAuthorizedRoute, updateUserDto, isAdminRoute], userController.put);
router.put('/:userDocument', [isAuthorizedRoute, isAdminRoute], userController.reactivate);
router.delete('/:userDocument', [isAuthorizedRoute, isAdminRoute], userController.delete);

export default router;
