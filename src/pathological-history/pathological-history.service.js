import { ServerError } from '../common/customError.js';
import db from '../common/db.js';

export const pathologicalHistoryService = {
  post: async ({ patientDocument, description, startDate, endDate }) => {
    try {
      await db.pathologicalHistory.create({
        data: {
          patientDocument,
          description,
          startDate: new Date(startDate),
          endDate: endDate ? new Date(endDate) : null,
        },
      });
    } catch (error) {
      if (error.code === 'P2002') {
        throw new Error('Ya existe es antecedente patológico para ese paciente');
      }
      throw new ServerError(error.message);
    }
  },
  delete: async (pathologicalHistoryId) => {
    try {
      await db.pathologicalHistory.delete({
        where: { pathologicalHistoryId },
      });
    } catch (error) {
      throw new ServerError(error.message);
    }
  },
};
export default pathologicalHistoryService;
