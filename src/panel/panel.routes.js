import { Router } from 'express';

import db from '../common/db.js';
import isAuthorizedRoute from '../common/middlewares/isAuthorizedRoute.js';

const router = Router();

router.get('/', [isAuthorizedRoute], async (req, res) => {
  if (req.user.role === 'ADMIN') {
    res.render('admin-panel', { user: req.user });
  } else {
    const today = new Date().toISOString().split('T')[0];
    const attended = await db.appointment.findMany({
      where: { doctorLicense: req.user.doctor.doctorLicense, date: new Date(today), status: 'ATTENDED' },
    });

    const notAttended = await db.appointment.findMany({
      where: { doctorLicense: req.user.doctor.doctorLicense, date: new Date(today), status: 'NOT_ATTENDED' },
    });

    res.render('panel', { user: req.user, attended: attended.length, notAttended: notAttended.length });
  }
});

export default router;
