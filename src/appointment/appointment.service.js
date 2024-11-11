import { DateTime } from 'luxon';

import { ServerError } from '../common/customError.js';
import db from '../common/db.js';

export const appointmentService = {
  active: async ({ doctorLicense, patientDocument, date }) => {
    try {
      const fechaISO = DateTime.fromJSDate(new Date(date)).setZone('UTC-3').toISO();
      const activeAppointment = await db.appointment.findFirst({
        where: {
          doctorLicense,
          patientDocument,
          date: fechaISO,
        },
        include: {
          patient: {
            include: {
              allergies: {
                include: { allergyType: true },
              },
              pathologicalHistory: true,
              habits: true,
              medications: true,
              appointments: {
                include: {
                  doctor: {
                    include: {
                      user: true,
                    },
                  },
                  diagnosis: {
                    orderBy: {
                      diagnosisId: 'desc',
                    },
                  },
                },
                orderBy: {
                  date: 'desc',
                },
              },
            },
          },
          diagnosis: {
            orderBy: {
              date: 'desc',
            },
          },
        },
      });

      const evolutions = await db.evolution.findMany({
        where: {
          doctorLicense,
          patientDocument,
        },
        orderBy: {
          date: 'desc',
        },
      });

      const allergyTypes = await db.allergyType.findMany({
        where: {
          isActive: true,
        },
      });

      return { activeAppointment, evolutions, allergyTypes };
    } catch (error) {
      throw new ServerError(error.message);
    }
  },
  details: async ({ doctorLicense, patientDocument, date }) => {
    try {
      const fechaISO = DateTime.fromJSDate(new Date(date)).setZone('UTC-3').toISO();
      const activeAppointment = await db.appointment.findFirst({
        where: {
          doctorLicense,
          patientDocument,
          date: fechaISO,
        },
        include: {
          patient: {
            include: {
              allergies: {
                include: { allergyType: true },
              },
              pathologicalHistory: true,
              habits: true,
              medications: true,
              appointments: {
                include: {
                  doctor: {
                    include: {
                      user: true,
                    },
                  },
                  diagnosis: {
                    orderBy: {
                      diagnosisId: 'asc',
                    },
                  },
                },
                orderBy: {
                  date: 'desc',
                },
              },
            },
          },
          diagnosis: {
            orderBy: {
              date: 'desc',
            },
          },
        },
      });

      const evolutions = await db.evolution.findMany({
        where: {
          doctorLicense,
          patientDocument,
        },
        orderBy: {
          date: 'desc',
        },
      });

      const allergyTypes = await db.allergyType.findMany({
        where: {
          isActive: true,
        },
      });

      return { activeAppointment, evolutions, allergyTypes };
    } catch (error) {
      throw new ServerError(error.message);
    }
  },
  finish: async ({ doctorLicense, patientDocument, date, diagnosis, description }) => {
    try {
      await db.appointment.update({
        where: {
          doctorLicense_patientDocument_date: {
            doctorLicense: doctorLicense,
            patientDocument: patientDocument,
            date: new Date(date).toISOString(),
          },
        },
        data: { status: 'ATTENDED' },
      });

      await db.diagnosis.createMany({
        data: createDiagnosis(diagnosis).map((diagnosis) => ({
          ...diagnosis,
          doctorLicense: doctorLicense,
          patientDocument: patientDocument,
          date: new Date(date).toISOString(),
        })),
      });

      await db.evolution.create({
        data: {
          doctorLicense,
          patientDocument,
          description: escapeJsonQuotes(description),
          date: new Date(date).toISOString(),
        },
      });
    } catch (error) {
      throw new ServerError(error.message);
    }
  },
  finishEdition: async ({ doctorLicense, patientDocument, date, diagnosis, description }) => {
    try {
      // TRANSACTION
      await db.$transaction(async (prisma) => {
        await prisma.diagnosis.deleteMany({
          where: {
            doctorLicense,
            patientDocument,
            date: new Date(date).toISOString(),
          },
        });

        await prisma.diagnosis.createMany({
          data: createDiagnosis(diagnosis).map((diagnosis) => ({
            ...diagnosis,
            doctorLicense: doctorLicense,
            patientDocument: patientDocument,
            date: new Date(date).toISOString(),
          })),
        });

        await prisma.appointment.update({
          where: {
            doctorLicense_patientDocument_date: {
              doctorLicense: doctorLicense,
              patientDocument: patientDocument,
              date: new Date(date).toISOString(),
            },
          },
          data: { status: 'ATTENDED' },
        });

        await prisma.evolution.update({
          where: {
            doctorLicense_patientDocument_date: {
              doctorLicense: doctorLicense,
              patientDocument: patientDocument,
              date: new Date(date).toISOString(),
            },
          },
          data: {
            description: escapeJsonQuotes(description),
          },
        });
      });
    } catch (error) {
      throw new ServerError(error.message);
    }
  },
  post: async ({ doctorLicense, patientDocument, date, startTime, reason }) => {
    const data = {
      doctorLicense,
      patientDocument,
      date: DateTime.fromISO(date, { zone: 'UTC' }).startOf('day').toISO(),
      startTime: DateTime.fromISO(startTime, { zone: 'UTC' }).plus({ minutes: -180 }).toISO(),
      endTime: DateTime.fromISO(startTime, { zone: 'UTC' }).plus({ minutes: -150 }).toISO(),
      reason: reason || 'Consulta general',
    };

    try {
      await db.appointment.create({
        data,
      });
    } catch (error) {
      throw new ServerError(error.message);
    }
  },
  put: async ({ doctorLicense, patientDocument, date, status }) => {
    try {
      const fullDate = DateTime.fromISO(date, { zone: 'UTC' }).startOf('day').toISO();
      await db.appointment.update({
        where: {
          doctorLicense_patientDocument_date: {
            doctorLicense,
            patientDocument,
            date: fullDate,
          },
        },
        data: { status },
      });
    } catch (error) {
      throw new ServerError(error.message);
    }
  },
};

function escapeJsonQuotes(description) {
  return description.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

function createDiagnosis(diagnosis) {
  return Object.keys(diagnosis)
    .filter((key) => key !== 'noteTemplate' && diagnosis[key] !== '')
    .map((key) => ({ description: diagnosis[key] }));
}

export default appointmentService;
