import { Router } from 'express';

import isAdminRoute from '../common/middlewares/isAdminRoute.js';
import isAuthorizedRoute from '../common/middlewares/isAuthorizedRoute.js';
import allergyController from './allergy-type.controller.js';
import createAllergyTypeDto from './middlewares/create-allergy-type.dto.js';

const router = Router();

router.get('/', [isAuthorizedRoute, isAdminRoute], allergyController.viewAll);
router.get('/crear', [isAuthorizedRoute, isAdminRoute], allergyController.viewCreate);
router.get('/:allergyId', [isAuthorizedRoute, isAdminRoute], allergyController.viewEdit);
router.post('/', [isAuthorizedRoute, createAllergyTypeDto, isAdminRoute], allergyController.post);
router.put('/', [isAuthorizedRoute, createAllergyTypeDto, isAdminRoute], allergyController.put);
router.put('/:allergyId', [isAuthorizedRoute, isAdminRoute], allergyController.reactivate);
router.delete('/:allergyId', [isAuthorizedRoute, isAdminRoute], allergyController.delete);

export default router;
