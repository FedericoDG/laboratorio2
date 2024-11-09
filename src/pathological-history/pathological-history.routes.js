import { Router } from 'express';

import isAuthorizedRoute from '../common/middlewares/isAuthorizedRoute.js';
import pathologicalHistoryController from './pathological-history.controller.js';

const router = Router();

router.post('/:patient_document', [isAuthorizedRoute], pathologicalHistoryController.post);
router.delete('/:pathologicalHistoryId/', [isAuthorizedRoute], pathologicalHistoryController.delete);

export default router;
