import { ServerError } from '../common/customError.js';
import db from '../common/db.js';

export const habitService = {
  post: async ({ patientDocument, description, startDate, endDate }) => {
    try {
      await db.habit.create({
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
  delete: async (habitId) => {
    try {
      await db.habit.delete({
        where: { habitId },
      });
    } catch (error) {
      throw new ServerError(error.message);
    }
  },
};
export default habitService;
