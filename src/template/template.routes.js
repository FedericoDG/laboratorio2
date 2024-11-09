import { Router } from 'express';

import isAuthorizedRoute from '../common/middlewares/isAuthorizedRoute.js';
import createTemplateDto from './middlewares/create-template.dto.js';
import templateController from './template.controller.js';

const router = Router();

router.get('/', [isAuthorizedRoute], templateController.viewAll);
router.get('/crear', [isAuthorizedRoute], templateController.viewCreate);
router.get('/:name', [isAuthorizedRoute], templateController.viewEdit);
router.post('/', [isAuthorizedRoute, createTemplateDto], templateController.post);
router.put('/', [isAuthorizedRoute, createTemplateDto], templateController.put);
router.put('/:name', [isAuthorizedRoute], templateController.reactivate);
router.delete('/:name', [isAuthorizedRoute], templateController.delete);

export default router;
