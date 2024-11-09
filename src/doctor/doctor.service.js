import { DateTime } from 'luxon';

import role from '../common/constant/role.js';
import { ServerError } from '../common/customError.js';
import db from '../common/db.js';
import userService from '../user/user.service.js';

const availabilities = [
  {
    day: 'MONDAY',
    startTime: DateTime.fromISO('14:00:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('20:00:00', { zone: 'UTC' }),
  },
  {
    day: 'TUESDAY',
    startTime: DateTime.fromISO('14:00:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('19:00:00', { zone: 'UTC' }),
  },
  {
    day: 'WEDNESDAY',
    startTime: DateTime.fromISO('14:00:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('20:00:00', { zone: 'UTC' }),
  },
  {
    day: 'THURSDAY',
    startTime: DateTime.fromISO('14:00:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('19:30:00', { zone: 'UTC' }),
  },
  {
    day: 'FRIDAY',
    startTime: DateTime.fromISO('14:00:00', { zone: 'UTC' }),
    endTime: DateTime.fromISO('20:00:00', { zone: 'UTC' }),
  },
];

export const doctorService = {
  viewAll: async () => {
    try {
      const doctors = await db.doctor.findMany({
        where: {
          user: {
            role: role.DOCTOR,
          },
        },
        include: {
          user: true,
        },
      });

      return { doctors };
    } catch (error) {
      throw new ServerError(error.message);
    }
  },
  viewEdit: async (doctorLicense) => {
    try {
      const doctor = await db.doctor.findUnique({ where: { doctorLicense }, include: { user: true } });

      return { doctor };
    } catch (error) {
      throw new ServerError(error.message);
    }
  },
  post: async ({ doctorLicense, userDocument, specialty, lastname, name, password }) => {
    try {
      const doctorAvailabilities = availabilities.map((availability) => ({
        ...availability,
        doctorLicense,
      }));
      const [user, doctor] = await db.$transaction([
        userService.post({ userDocument, lastname, name, password }),
        db.doctor.create({
          data: {
            doctorLicense,
            userDocument,
            specialty: specialty,
          },
        }),
        db.availability.createMany({
          data: doctorAvailabilities,
        }),
      ]);

      return { user, doctor };
    } catch (error) {
      if (error.code === 'P2002') {
        throw new Error('Ya existe un médico con esa matrícula o documento');
      }
      throw new ServerError(error.message);
    }
  },
  put: async ({ doctorLicense, userDocument, specialty, lastname, name, password }) => {
    try {
      const [updatedUser, updatedDoctor] = await db.$transaction([
        userService.put({
          userDocument,
          lastname,
          name,
          password,
        }),
        db.doctor.update({
          where: {
            doctorLicense: doctorLicense,
          },
          data: {
            specialty: specialty,
          },
        }),
      ]);

      return { updatedUser, updatedDoctor };
    } catch (error) {
      throw new ServerError(error.message);
    }
  },
  delete: async (userDocument) => {
    try {
      await db.user.update({
        where: { userDocument },
        data: { isActive: false },
      });
    } catch (error) {
      throw new ServerError(error.message);
    }
  },
  reactivate: async (userDocument) => {
    try {
      await db.user.update({
        where: { patientDocument: +userDocument },
        data: { isActive: true },
      });
    } catch (error) {
      throw new ServerError(error.message);
    }
  },
};

export default doctorService;
