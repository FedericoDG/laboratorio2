import { Router } from 'express';

import isAuthorizedRoute from '../common/middlewares/isAuthorizedRoute.js';
import appointmentController from './appointment.controller.js';

const router = Router();

router.get('/activo', [isAuthorizedRoute], appointmentController.active);
router.get('/activo/editar', [isAuthorizedRoute], appointmentController.activeEdit);
router.get('/detalles', [isAuthorizedRoute], appointmentController.details);
router.get('/ultimos', [isAuthorizedRoute], appointmentController.last);
router.post('/', [isAuthorizedRoute], appointmentController.post);
router.post('/finalizar', [isAuthorizedRoute], appointmentController.finish);
router.put('/finalizar-edicion', [isAuthorizedRoute], appointmentController.finishEdition);
router.put('/', [isAuthorizedRoute], appointmentController.put);

export default router;
