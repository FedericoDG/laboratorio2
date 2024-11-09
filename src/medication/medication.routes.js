import { Router } from 'express';

import isAuthorizedRoute from '../common/middlewares/isAuthorizedRoute.js';
import medicationController from './medication.controller.js';

const router = Router();

router.post('/:patient_document', [isAuthorizedRoute], medicationController.post);
router.delete('/:name/:patientDocument', [isAuthorizedRoute], medicationController.delete);

export default router;
