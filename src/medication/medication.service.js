import { ServerError } from '../common/customError.js';
import db from '../common/db.js';

export const allergyTypeService = {
  post: async ({ patientDocument, medicationName }) => {
    try {
      await db.medication.create({
        data: {
          patientDocument,
          name: medicationName,
        },
      });
    } catch (error) {
      if (error.code === 'P2002') {
        throw new Error('Ya existe esa medicación para ese paciente');
      }
      throw new ServerError(error.message);
    }
  },
  delete: async ({ name, patientDocument }) => {
    try {
      await db.medication.delete({
        where: { patientDocument_name: { patientDocument, name } },
      });
    } catch (error) {
      throw new ServerError(error.message);
    }
  },
};
export default allergyTypeService;
