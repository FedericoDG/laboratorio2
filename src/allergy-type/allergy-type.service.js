import { ServerError } from '../common/customError.js';
import db from '../common/db.js';

export const allergyTypeService = {
  viewAll: async () => {
    try {
      const allergyTypes = await db.allergyType.findMany();

      return { allergyTypes };
    } catch (error) {
      throw new ServerError(error.message);
    }
  },
  viewEdit: async (allergyId) => {
    try {
      const allergyType = await db.allergyType.findFirst({ where: { allergyId } });

      return { allergyType };
    } catch (error) {
      throw new ServerError(error.message);
    }
  },
  post: async (allergyName) => {
    try {
      await db.allergyType.create({
        data: {
          allergyName,
        },
      });
    } catch (error) {
      if (error.code === 'P2002') {
        throw new Error('Ya existe un tipo de alergia con ese nombre');
      }
      throw new ServerError(error.message);
    }
  },
  put: async ({ allergyId, allergyName }) => {
    try {
      await db.allergyType.update({
        where: { allergyId },
        data: { allergyName },
      });
    } catch (error) {
      throw new ServerError(error.message);
    }
  },
  delete: async (allergyId) => {
    try {
      await db.allergyType.update({
        where: { allergyId },
        data: { isActive: false },
      });
    } catch (error) {
      throw new ServerError(error.message);
    }
  },
  reactivate: async (allergyId) => {
    try {
      await db.allergyType.update({
        where: { allergyId },
        data: { isActive: true },
      });
    } catch (error) {
      throw new ServerError(error.message);
    }
  },
};

export default allergyTypeService;
