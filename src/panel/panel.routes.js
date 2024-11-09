import { Router } from 'express';

import role from '../common/constant/role.js';
import db from '../common/db.js';
import isAuthorizedRoute from '../common/middlewares/isAuthorizedRoute.js';

const router = Router();

router.get('/', [isAuthorizedRoute], async (req, res) => {
  if (req.user.role === role.ADMIN) {
    res.render('admin-panel', { user: req.user });
  } else {
    const today = new Date();
    today.setHours(today.getHours() - 3);
    const todayISO = today.toISOString().split('T')[0];
    const attended = await db.appointment.findMany({
      where: { doctorLicense: req.user.doctor.doctorLicense, date: new Date(todayISO), status: 'ATTENDED' },
    });

    const notAttended = await db.appointment.findMany({
      where: { doctorLicense: req.user.doctor.doctorLicense, date: new Date(todayISO), status: 'NOT_ATTENDED' },
    });

    res.render('panel', { user: req.user, attended: attended.length, notAttended: notAttended.length });
  }
});

export default router;
