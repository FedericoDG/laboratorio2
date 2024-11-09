import medicationService from './medication.service.js';

const medicationController = {
  post: async (req, res) => {
    const { patient_document } = req.params;
    try {
      let { medicationName } = req.body;

      await medicationService.post({ patientDocument: +patient_document, medicationName });
      res.json({ success: true, message: 'Medicación creada con éxito' });
    } catch (error) {
      return res.status(400).json({ success: false, message: error.message });
    }
  },
  delete: async (req, res) => {
    try {
      const { name, patientDocument } = req.params;

      await medicationService.delete({ name, patientDocument: +patientDocument });
      res.json({ success: true, message: 'Medicación eliminada con éxito' });
    } catch (error) {
      return res.json({ success: false, message: error.message });
    }
  },
};

export default medicationController;
