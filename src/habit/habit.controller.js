import habitService from './habit.service.js';

const habitController = {
  post: async (req, res) => {
    try {
      let { patient_document } = req.params;
      let { habitDescription, startDate, endDate } = req.body;

      endDate === '' ? (endDate = null) : endDate;

      await habitService.post({
        patientDocument: +patient_document,
        description: habitDescription,
        startDate,
        endDate,
      });

      res.json({ success: true, message: 'Hábito creado con éxito' });
    } catch (error) {
      return res.status(400).json({ success: false, message: error.message });
    }
  },
  delete: async (req, res) => {
    try {
      const { habitId } = req.params;

      await habitService.delete(habitId);
      res.json({ success: true, message: 'Hábito eliminado con éxito' });
    } catch (error) {
      return res.json({ success: false, message: error.message });
    }
  },
};

export default habitController;
