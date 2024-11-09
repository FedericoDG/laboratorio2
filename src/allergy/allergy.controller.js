import allergyService from './allergy.service.js';

const allergyController = {
  post: async (req, res) => {
    try {
      const { patient_document } = req.params;
      let { allergyId, severity, startDate, endDate } = req.body;

      endDate === '' ? (endDate = null) : endDate;

      await allergyService.post({ patientDocument: +patient_document, allergyId, severity, startDate, endDate });
      res.json({ success: true, message: 'Alergia creada con éxito' });
    } catch (error) {
      return res.status(400).json({ success: false, message: error.message });
    }
  },
  delete: async (req, res) => {
    try {
      const { allergyId, patientDocument } = req.params;

      await allergyService.delete({ allergyId, patientDocument: +patientDocument });
      res.json({ success: true, message: 'Alergia eliminada con éxito' });
    } catch (error) {
      return res.json({ success: false, message: error.message });
    }
  },
};

export default allergyController;
