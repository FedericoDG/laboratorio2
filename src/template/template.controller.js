import templateService from './template.service.js';

const templateController = {
  viewAll: async (req, res) => {
    const { doctorLicense } = req.user.doctor;

    let success = false;
    let message = '';

    if (req.query.success) {
      success = true;
    }

    if (req.query.message) {
      message = req.query.message;
    }

    const { noteTemplates } = await templateService.viewAll(doctorLicense);

    res.render('get-templates', {
      user: req.user,
      noteTemplates,
      success,
      error: false,
      message,
    });
  },
  viewCreate: async (req, res) => {
    res.render('create-template', {
      user: req.user,
      success: false,
      error: false,
      message: '',
    });
  },
  viewEdit: async (req, res) => {
    const { name } = req.params;
    const { doctorLicense } = req.user.doctor;
    const { noteTemplate } = await templateService.viewEdit({ doctorLicense, name });

    res.render('edit-template', {
      user: req.user,
      noteTemplate,
      success: false,
      error: false,
      message: '',
    });
  },
  post: async (req, res) => {
    try {
      const { name, content } = req.body;

      await templateService.post({ doctorLicense: req.user.doctor.doctorLicense, name, content });

      res.render('create-template', {
        user: req.user,
        success: true,
        error: false,
        message: 'Plantilla creada con éxito',
      });
    } catch (error) {
      return res.render('create-template', {
        user: req.user,
        success: false,
        error: true,
        message: error.message,
      });
    }
  },
  put: async (req, res) => {
    const { name, content } = req.body;
    const { doctorLicense } = req.user.doctor;
    await templateService.put({ doctorLicense, name, content });
    res.redirect('/panel/plantillas?success=true&message=Plantilla%20actualizada%20con%20éxito');
  },
  delete: async (req, res) => {
    const { name } = req.params;
    const { doctorLicense } = req.user.doctor;
    await templateService.delete({ doctorLicense, name });

    res.redirect('/panel/plantillas?success=true&message=Plantilla%20desactivada%20con%20éxito');
  },
  reactivate: async (req, res) => {
    const { name } = req.params;
    const { doctorLicense } = req.user.doctor;
    await templateService.reactivate({ doctorLicense, name });

    res.redirect('/panel/plantillas?success=true&message=Plantilla%20activada%20con%20éxito');
  },
};

export default templateController;
