import { Router } from 'express';

import allergyRoutes from '../allergy/allergy.routes.js';
import authRoutes from '../auth/auth.routes.js';
import isAuthorizedApi from '../common/middlewares/isAuthorizedApi.js';
import historyRoutes from '../habit/habit.routes.js';
import medicationRoutes from '../medication/medication.routes.js';
import pathologyRoutes from '../pathological-history/pathological-history.routes.js';

const router = Router();

router.use('/auth', authRoutes);
router.use('/alergias', [isAuthorizedApi], allergyRoutes);
router.use('/medicacion', [isAuthorizedApi], medicationRoutes);
router.use('/patologias', [isAuthorizedApi], pathologyRoutes);
router.use('/habitos', [isAuthorizedApi], historyRoutes);

export default router;
