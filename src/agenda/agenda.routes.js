import { Router } from 'express';

import isAuthorizedRoute from '../common/middlewares/isAuthorizedRoute.js';
import agendaController from './agenda.controller.js';

const router = Router();
router.get('/', [isAuthorizedRoute], agendaController.get);

router.get('/doctor/:doctorLicense', [isAuthorizedRoute], agendaController.getByDoctor);

export default router;
