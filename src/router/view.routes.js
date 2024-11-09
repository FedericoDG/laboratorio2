import { Router } from 'express';

import agendaRoutes from '../agenda/agenda.routes.js';
import allergyTypeRoutes from '../allergy-type/allergy-type.routes.js';
import appointmentRoutes from '../appointment/appointment.routes.js';
import doctorRoutes from '../doctor/doctor.routes.js';
import panelRoutes from '../panel/panel.routes.js';
import patientRoutes from '../patient/patient.routes.js';
import templateRoutes from '../template/template.routes.js';
import userRoutes from '../user/user.routes.js';

const router = Router();

router.get('/', (_req, res) => res.render('login'));
router.use('/panel', panelRoutes);
router.use('/panel/agenda', agendaRoutes);
router.use('/panel/pacientes', patientRoutes);
router.use('/panel/medicos', doctorRoutes);
router.use('/panel/usuarios', userRoutes);
router.use('/panel/tipos-de-alergia', allergyTypeRoutes);
router.use('/panel/turnos', appointmentRoutes);
router.use('/panel/plantillas', templateRoutes);

export default router;
