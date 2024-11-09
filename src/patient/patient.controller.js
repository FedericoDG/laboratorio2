import patientService from './patient.service.js';

const patientController = {
  viewAll: async (req, res) => {
    let success = false;
    let message = '';

    if (req.query.success) {
      success = true;
    }

    if (req.query.message) {
      message = req.query.message;
    }

    const { patients } = await patientService.viewAll();

    res.render('get-patients', {
      user: req.user,
      patients,
      success,
      error: false,
      message,
    });
  },
  viewCreate: async (req, res) => {
    res.render('create-patient', {
      user: req.user,
      success: false,
      error: false,
      message: '',
    });
  },
  viewEdit: async (req, res) => {
    const { patientDocument } = req.params;
    const { patient } = await patientService.viewEdit(+patientDocument);

    res.render('edit-patient', {
      user: req.user,
      patient,
      success: false,
      error: false,
      message: '',
    });
  },
  get: async (req, res) => {
    const { patientDocument } = req.params;
    const { patient } = await patientService.get(+patientDocument);

    res.json({ patient });
  },
  post: async (req, res) => {
    try {
      const { patientDocument, lastname, name, birthDate, gender, socialSecurity } = req.body;
      await patientService.post({
        patientDocument: +patientDocument,
        lastname,
        name,
        birthDate: new Date(birthDate),
        gender,
        socialSecurity,
      });

      res.render('create-patient', {
        user: req.user,
        success: true,
        error: false,
        message: 'Paciente creado con éxito',
      });
    } catch (error) {
      return res.render('create-patient', {
        user: req.user,
        success: false,
        error: true,
        message: error.message,
      });
    }
  },
  put: async (req, res) => {
    const { patientDocument, lastname, name, birthDate, gender, socialSecurity } = req.body;
    await patientService.put({
      patientDocument: +patientDocument,
      lastname,
      name,
      birthDate: new Date(birthDate),
      gender,
      socialSecurity,
    });

    res.redirect('/panel/pacientes?success=true&message=Paciente actualizado con éxito');
  },
  delete: async (req, res) => {
    const { patientDocument } = req.params;
    await patientService.delete(+patientDocument);

    res.redirect('/panel/pacientes?success=true&message=Paciente desactivado con éxito');
  },
  reactivate: async (req, res) => {
    const { patientDocument } = req.params;
    await patientService.reactivate(+patientDocument);

    res.redirect('/panel/pacientes?success=true&message=Paciente reactivado con éxito');
  },
};

export default patientController;
