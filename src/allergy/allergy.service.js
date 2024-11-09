import { ServerError } from '../common/customError.js';
import db from '../common/db.js';

export const allergyTypeService = {
  post: async ({ patientDocument, allergyId, severity, startDate, endDate }) => {
    try {
      await db.allergy.create({
        data: {
          patientDocument,
          allergyId,
          severity,
          startDate: new Date(startDate),
          endDate: endDate ? new Date(endDate) : null,
        },
      });
    } catch (error) {
      if (error.code === 'P2002') {
        throw new Error('Ya existe ese tipo de alergia para ese paciente');
      }
      throw new ServerError(error.message);
    }
  },
  delete: async ({ allergyId, patientDocument }) => {
    try {
      await db.allergy.delete({
        where: { patientDocument_allergyId: { patientDocument, allergyId } },
      });
    } catch (error) {
      throw new ServerError(error.message);
    }
  },
};
export default allergyTypeService;
