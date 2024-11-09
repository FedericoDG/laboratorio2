import { Router } from 'express';

import isAuthorizedRoute from '../common/middlewares/isAuthorizedRoute.js';
import allergyController from './allergy.controller.js';

const router = Router();

router.post('/:patient_document', [isAuthorizedRoute], allergyController.post);
router.delete('/:allergyId/:patientDocument', [isAuthorizedRoute], allergyController.delete);

export default router;
