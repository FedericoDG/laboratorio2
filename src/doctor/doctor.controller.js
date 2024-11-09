import userService from '../user/user.service.js';
import doctorService from './doctor.service.js';

const doctorController = {
  viewAll: async (req, res) => {
    let success = false;
    let message = '';

    if (req.query.success) {
      success = true;
    }

    if (req.query.message) {
      message = req.query.message;
    }

    const { doctors } = await doctorService.viewAll();

    res.render('get-doctors', {
      user: req.user,
      doctors,
      success,
      error: false,
      message,
    });
  },
  viewCreate: async (req, res) => {
    res.render('create-doctor', {
      user: req.user,
      success: false,
      error: false,
      message: '',
    });
  },
  viewEdit: async (req, res) => {
    const { doctorLicense } = req.params;
    const { doctor } = await doctorService.viewEdit(doctorLicense);

    res.render('edit-doctor', {
      user: req.user,
      doctor,
      success: false,
      error: false,
      message: '',
    });
  },
  post: async (req, res) => {
    try {
      const { doctorLicense, userDocument, specialty, lastname, name, password } = req.body;
      await doctorService.post({ doctorLicense, userDocument: +userDocument, specialty, lastname, name, password });

      res.render('create-doctor', {
        user: req.user,
        success: true,
        error: false,
        message: 'Médico creado con éxito',
      });
    } catch (error) {
      return res.render('create-doctor', {
        user: req.user,
        success: false,
        error: true,
        message: error.message,
      });
    }
  },
  put: async (req, res) => {
    const { doctorLicense, userDocument, specialty, lastname, name, password } = req.body;
    await doctorService.put({ doctorLicense, userDocument: +userDocument, specialty, lastname, name, password });

    res.redirect('/panel/medicos?success=true&message=Médico actualizado con éxito');
  },
  delete: async (req, res) => {
    const { userDocument } = req.params;
    await userService.delete(+userDocument);

    res.redirect('/panel/medicos?success=true&message=Médico desactivado con éxito');
  },
  reactivate: async (req, res) => {
    const { userDocument } = req.params;
    await userService.reactivate(+userDocument);

    res.redirect('/panel/medicos?success=true&message=Médico reactivado con éxito');
  },
};

export default doctorController;
