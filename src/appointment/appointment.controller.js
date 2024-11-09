import db from '../common/db.js';
import templateService from '../template/template.service.js';
import appointmentService from './appointment.service.js';

const appointmentController = {
  active: async (req, res) => {
    const { doctorLicense } = req.user.doctor;
    const { patientDocument, date } = req.query;
    let success = false;
    let message = '';

    if (req.query.success) {
      success = true;
    }

    if (req.query.message) {
      message = req.query.message;
    }

    const { activeAppointment, evolutions, allergyTypes } = await appointmentService.active({
      doctorLicense,
      patientDocument: +patientDocument,
      date,
    });

    if (!activeAppointment || activeAppointment.status === 'ATTENDED' || activeAppointment.status === 'CANCELLED') {
      return res.redirect('/panel/agenda/doctor/' + doctorLicense + '?error=true&message=El%20turno%20no%20existe');
    }

    activeAppointment.date = new Date(activeAppointment.date).toISOString().split('T')[0];

    const { noteTemplates } = await templateService.getByDoctorLicense(doctorLicense);

    res.render('active-appointment', {
      user: req.user,
      doctorLicense,
      activeAppointment,
      evolutions,
      noteTemplates,
      allergyTypes,
      success,
      error: false,
      message,
      formatDate,
    });
  },
  activeEdit: async (req, res) => {
    const { doctorLicense } = req.user.doctor;
    const { patientDocument, date } = req.query;
    let success = false;
    let message = '';

    if (req.query.success) {
      success = true;
    }

    if (req.query.message) {
      message = req.query.message;
    }

    const { activeAppointment, evolutions, allergyTypes } = await appointmentService.active({
      doctorLicense,
      patientDocument: +patientDocument,
      date,
    });

    if (!activeAppointment || activeAppointment.status === 'NOT_ATTENDED' || activeAppointment.status === 'CANCELLED') {
      return res.redirect('/panel/agenda/doctor/' + doctorLicense + '?error=true&message=El%20turno%20no%20existe');
    }

    activeAppointment.date = new Date(activeAppointment.date).toISOString().split('T')[0];

    const { noteTemplates } = await templateService.getByDoctorLicense(doctorLicense);

    res.render('edit-appointment', {
      user: req.user,
      doctorLicense,
      activeAppointment,
      evolutions,
      noteTemplates,
      allergyTypes,
      success,
      error: false,
      message,
      formatDate,
      unescapeHtmlJsonQuotes,
    });
  },
  details: async (req, res) => {
    const { doctorLicense } = req.user.doctor;
    const { patientDocument } = req.query;
    let success = false;
    let message = '';

    if (req.query.success) {
      success = true;
    }

    if (req.query.message) {
      message = req.query.message;
    }

    const { activeAppointment, evolutions, allergyTypes } = await appointmentService.details({
      doctorLicense,
      patientDocument: +patientDocument,
    });

    activeAppointment.date = new Date(activeAppointment.date).toISOString().split('T')[0];

    const { noteTemplates } = await templateService.getByDoctorLicense(doctorLicense);

    res.render('details-appointment', {
      user: req.user,
      doctorLicense,
      activeAppointment,
      evolutions,
      noteTemplates,
      allergyTypes,
      success,
      error: false,
      message,
      formatDate,
      unescapeHtmlJsonQuotes,
    });
  },
  finish: async (req, res) => {
    const { doctorLicense } = req.user.doctor;
    const { patientDocument, date } = req.query;
    const { diagnosis, description } = req.body;

    await appointmentService.finish({ doctorLicense, patientDocument: +patientDocument, date, diagnosis, description });

    return res.redirect(
      '/panel/agenda/doctor/' + doctorLicense + '?success=true&message=Turno%20finalizado%20con%20éxito',
    );
  },
  finishEdition: async (req, res) => {
    const { doctorLicense } = req.user.doctor;
    const { patientDocument, date } = req.query;
    const { diagnosis, description } = req.body;

    await appointmentService.finishEdition({
      doctorLicense,
      patientDocument: +patientDocument,
      date,
      diagnosis,
      description,
    });

    return res.redirect(
      '/panel/turnos/ultimos' + '?success=true&message=Edición%20de%20turno%20finalizada%20con%20éxito',
    );
  },
  post: async (req, res) => {
    const { doctorLicense, patientDocument, date, startTime, reason } = req.body;
    await appointmentService.post({ doctorLicense, patientDocument: +patientDocument, date, startTime, reason });

    res.json({ success: true, message: 'Turno creado con éxito' });
  },
  put: async (req, res) => {
    const { doctorLicense, patientDocument, date, status } = req.body;
    await appointmentService.put({ doctorLicense, patientDocument: +patientDocument, date, status });

    res.json({ success: true, message: 'Turno actualizado con éxito' });
  },
  last: async (req, res) => {
    const { doctor } = req.user;
    const { doctorLicense } = doctor;

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

    const latestAppointments = await db.appointment.findMany({
      where: { doctorLicense, status: 'ATTENDED' },
      distinct: ['patientDocument'],
      orderBy: [{ patientDocument: 'asc' }, { date: 'desc' }],
      include: { patient: true },
    });

    res.render('get-last-appointments', {
      user: req.user,
      doctor,
      latestAppointments,
      formatDate,
      formatDate2,
      formatTime,
      success,
      error,
      message,
    });
  },
};

function formatDate(date) {
  if (!date) {
    return '';
  }
  const dateObj = new Date(date);
  const day = String(dateObj.getUTCDate()).padStart(2, '0');
  const month = String(dateObj.getUTCMonth() + 1).padStart(2, '0');
  const year = String(dateObj.getUTCFullYear()).slice(-2);
  return `${day}-${month}-${year}`;
}

function formatDate2(date) {
  if (!date) {
    return '';
  }
  return date.toISOString().split('T')[0];
}

function formatTime(dateString) {
  const date = new Date(dateString);
  const hours = date.getUTCHours().toString().padStart(2, '0');
  const minutes = date.getUTCMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}

function unescapeHtmlJsonQuotes(escapedString) {
  return escapedString
    .replace(/\\&quot;/g, '"') // Reemplaza \&quot; por "
    .replace(/\\"/g, '"') // Reemplaza \" por "
    .replace(/\\'/g, "'") // Reemplaza \' por '
    .replace(/\\\\/g, '\\') // Reemplaza \\ por \
    .replace(/&gt;/g, '>') // Reemplaza &gt; por >
    .replace(/&lt;/g, '<') // Reemplaza &lt; por <
    .replace(/&amp;/g, '&'); // Reemplaza &amp; por &
}

export default appointmentController;
