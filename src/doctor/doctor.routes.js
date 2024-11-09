import { Router } from 'express';

import isAdminRoute from '../common/middlewares/isAdminRoute.js';
import isAuthorizedRoute from '../common/middlewares/isAuthorizedRoute.js';
import createUserDto from '../user/middlewares/create-user.dto.js';
import updateUserDto from '../user/middlewares/update-user.dto.js';
import doctorController from './doctor.controller.js';
import createDoctorDto from './middlewares/create-doctor.dto.js';

const router = Router();

router.get('/', [isAuthorizedRoute, isAdminRoute], doctorController.viewAll);
router.get('/crear', [isAuthorizedRoute, isAdminRoute], doctorController.viewCreate);
router.get('/:doctorLicense', [isAuthorizedRoute, isAdminRoute], doctorController.viewEdit);
router.post('/', [isAuthorizedRoute, createUserDto, createDoctorDto, isAdminRoute], doctorController.post);
router.put('/', [isAuthorizedRoute, updateUserDto, createDoctorDto, isAdminRoute], doctorController.put);

export default router;
