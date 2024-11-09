import { Router } from 'express';

import isAdminRoute from '../common/middlewares/isAdminRoute.js';
import isAuthorizedApi from '../common/middlewares/isAuthorizedApi.js';
import isAuthorizedRoute from '../common/middlewares/isAuthorizedRoute.js';
import createPatientDto from './middlewares/create-patient.dto.js';
import patientController from './patient.controller.js';

const router = Router();

router.get('/', [isAuthorizedRoute, isAdminRoute], patientController.viewAll);
router.get('/crear', [isAuthorizedRoute, isAdminRoute], patientController.viewCreate);
router.get('/api/:patientDocument', [isAuthorizedApi, isAdminRoute], patientController.get);
router.get('/:patientDocument', [isAuthorizedRoute, isAdminRoute], patientController.viewEdit);
router.post('/', [isAuthorizedRoute, createPatientDto, isAdminRoute], patientController.post);
router.put('/', [isAuthorizedRoute, isAdminRoute], patientController.put);
router.put('/:patientDocument', [isAuthorizedRoute, isAdminRoute], patientController.reactivate);
router.delete('/:patientDocument', [isAuthorizedRoute, isAdminRoute], patientController.delete);

export default router;
