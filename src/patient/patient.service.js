import { ServerError } from '../common/customError.js';
import db from '../common/db.js';
import { formatDate } from '../common/format-date.js';

export const patientService = {
  viewAll: async () => {
    try {
      const patients = await db.patient.findMany();
      const mappedPatients = patients.map((patient) => {
        return {
          ...patient,
          birthDate: formatDate(patient.birthDate),
        };
      });

      return { patients: mappedPatients };
    } catch (error) {
      throw new ServerError(error.message);
    }
  },
  viewEdit: async (patientDocument) => {
    try {
      const patient = await db.patient.findUnique({ where: { patientDocument: patientDocument } });

      return { patient: { ...patient, birthDate: patient.birthDate.toISOString().split('T')[0] } };
    } catch (error) {
      throw new ServerError(error.message);
    }
  },
  get: async (patientDocument) => {
    try {
      const patient = await db.patient.findUnique({ where: { patientDocument, isActive: true } });

      return { patient };
    } catch (error) {
      throw new ServerError(error.message);
    }
  },
  post: async ({ patientDocument, lastname, name, birthDate, gender, socialSecurity }) => {
    try {
      await db.patient.create({
        data: { patientDocument, lastname, name, birthDate, gender, socialSecurity },
      });
    } catch (error) {
      if (error.code === 'P2002') {
        throw new Error('Ya existe un paciente con ese documento');
      }
      throw new ServerError(error.message);
    }
  },
  put: async ({ patientDocument, lastname, name, birthDate, gender, socialSecurity }) => {
    try {
      await db.patient.update({
        where: { patientDocument },
        data: { lastname, name, birthDate, gender, socialSecurity },
      });
    } catch (error) {
      throw new ServerError(error.message);
    }
  },
  delete: async (patientDocument) => {
    try {
      await db.patient.update({
        where: { patientDocument },
        data: { isActive: false },
      });
    } catch (error) {
      throw new ServerError(error.message);
    }
  },
  reactivate: async (patientDocument) => {
    try {
      await db.patient.update({
        where: { patientDocument: +patientDocument },
        data: { isActive: true },
      });
    } catch (error) {
      throw new ServerError(error.message);
    }
  },
};

export default patientService;
