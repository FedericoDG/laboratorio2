import { ServerError } from '../common/customError.js';
import db from '../common/db.js';

export const templateService = {
  viewAll: async (doctorLicense) => {
    try {
      const noteTemplates = await db.noteTemplate.findMany({
        where: { doctorLicense },
      });

      return { noteTemplates };
    } catch (error) {
      throw new ServerError(error.message);
    }
  },
  viewEdit: async ({ doctorLicense, name }) => {
    try {
      const noteTemplate = await db.noteTemplate.findFirst({ where: { doctorLicense, name } });

      return { noteTemplate };
    } catch (error) {
      throw new ServerError(error.message);
    }
  },
  post: async ({ doctorLicense, name, content }) => {
    try {
      await db.noteTemplate.create({
        data: {
          doctorLicense,
          name,
          content,
        },
      });
    } catch (error) {
      if (error.code === 'P2002') {
        throw new Error('Ya existe una plantilla con ese nombre');
      }
      throw new ServerError(error.message);
    }
  },
  put: async ({ doctorLicense, name, content }) => {
    try {
      await db.noteTemplate.update({
        where: { doctorLicense_name: { doctorLicense, name } },
        data: { content },
      });
    } catch (error) {
      throw new ServerError(error.message);
    }
  },
  delete: async ({ doctorLicense, name }) => {
    try {
      await db.noteTemplate.update({
        where: { doctorLicense_name: { doctorLicense, name } },
        data: { isActive: false },
      });
    } catch (error) {
      throw new ServerError(error.message);
    }
  },
  reactivate: async ({ doctorLicense, name }) => {
    try {
      await db.noteTemplate.update({
        where: { doctorLicense_name: { doctorLicense, name } },
        data: { isActive: true },
      });
    } catch (error) {
      throw new ServerError(error.message);
    }
  },
  getByDoctorLicense: async (doctorLicense) => {
    try {
      const noteTemplates = await db.noteTemplate.findMany({
        where: { doctorLicense, isActive: true },
      });

      return { noteTemplates };
    } catch (error) {
      throw new ServerError(error.message);
    }
  },
};

export default templateService;
