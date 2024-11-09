import { Router } from 'express';

import isAuthorizedRoute from '../common/middlewares/isAuthorizedRoute.js';
import habitController from './habit.controller.js';

const router = Router();

router.post('/:patient_document', [isAuthorizedRoute], habitController.post);
router.delete('/:habitId/', [isAuthorizedRoute], habitController.delete);

export default router;
