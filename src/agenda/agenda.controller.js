import agendaService from './agenda.service.js';

const agendaController = {
  get: async (req, res) => {
    if (req.user.role === 'ADMIN') {
      const { resources } = await agendaService.get();

      return res.render('admin-schedule', { user: req.user, resources });
    } else {
      return res.redirect(`/panel/agenda/doctor/${req.user.doctor.doctorLicense}`);
    }
  },
  getByDoctor: async (req, res) => {
    const { doctorLicense } = req.params;

    let success = false;
    let error = false;
    let message = '';

    if (req.query.success) {
      success = true;
    }

    if (req.query.error) {
      error = true;
    }

    if (req.query.message) {
      message = req.query.message;
    }

    if (doctorLicense.endsWith('.map')) {
      return res.status(404).send('Not Found');
    }

    const { doctor, appointmets2, resources } = await agendaService.getByDoctor(doctorLicense);

    return res.render('admin-schedule-by-doctor', {
      user: req.user,
      doctor: doctor,
      appointmets: appointmets2,
      resources,
      success,
      message,
      error,
    });
  },
};

export default agendaController;
