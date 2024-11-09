import pathologicalHistoryService from './pathological-history.service.js';

const pathologicalHistoryController = {
  post: async (req, res) => {
    try {
      let { patient_document } = req.params;
      let { pathologicalHistoryDescription, startDate, endDate } = req.body;

      endDate === '' ? (endDate = null) : endDate;

      await pathologicalHistoryService.post({
        patientDocument: +patient_document,
        description: pathologicalHistoryDescription,
        startDate,
        endDate,
      });

      res.json({ success: true, message: 'Antecedente patológico creado con éxito' });
    } catch (error) {
      return res.status(400).json({ success: false, message: error.message });
    }
  },
  delete: async (req, res) => {
    try {
      const { pathologicalHistoryId } = req.params;

      await pathologicalHistoryService.delete(pathologicalHistoryId);
      res.json({ success: true, message: 'Antecedente patológico eliminado con éxito' });
    } catch (error) {
      return res.json({ success: false, message: error.message });
    }
  },
};

export default pathologicalHistoryController;
