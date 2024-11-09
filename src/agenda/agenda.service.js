import { ServerError } from '../common/customError.js';
import db from '../common/db.js';

const agendaService = {
  get: async () => {
    try {
      const doctores = await db.doctor.findMany({ where: { user: { isActive: true } }, include: { user: true } });

      const resources = doctores.map((doctor) => {
        return {
          id: doctor.doctorLicense,
          title: `${doctor.user.lastname} ${doctor.user.name}`,
        };
      });

      return { resources };
    } catch (error) {
      throw new ServerError(error.message);
    }
  },
  getByDoctor: async (doctorLicense) => {
    try {
      const doctor = await db.doctor.findFirst({
        where: { doctorLicense: doctorLicense },
        include: { user: true },
      });

      const appointmets = await db.appointment.findMany({
        where: {
          doctorLicense: doctorLicense,
        },
        include: {
          patient: true,
        },
      });

      const appointmets2 = appointmets.map((appointment) => {
        const datePart = appointment.date.toISOString().split('T')[0];
        const timePartStart = appointment.startTime.toISOString().split('T')[1].split('.')[0];
        const timePartEnd = appointment.endTime.toISOString().split('T')[1].split('.')[0];

        return {
          id: `${appointment.doctorLicense}#${appointment.patientDocument}#${datePart}`,
          resourceId: appointment.doctorLicense,
          start: `${datePart}T${timePartStart}`,
          end: `${datePart}T${timePartEnd}`,
          title: `${appointment.patient.lastname} ${appointment.patient.name}`,
          status: appointment.status,
          reason: appointment.reason,
        };
      });
      const resources = [
        {
          id: doctorLicense,
          title: `${doctor.user.lastname} ${doctor.user.name}`,
        },
      ];

      return { doctor, resources, appointmets2 };
    } catch (error) {
      throw new ServerError(error.message);
    }
  },
};

export default agendaService;
