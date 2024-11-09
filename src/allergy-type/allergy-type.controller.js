import allergyService from './allergy-type.service.js';

const allergyTypeController = {
  viewAll: async (req, res) => {
    let success = false;
    let message = '';

    if (req.query.success) {
      success = true;
    }

    if (req.query.message) {
      message = req.query.message;
    }

    const { allergyTypes } = await allergyService.viewAll();

    res.render('get-allergy-types', {
      user: req.user,
      allergyTypes,
      success,
      error: false,
      message,
    });
  },
  viewCreate: async (req, res) => {
    res.render('create-allergy-type', {
      user: req.user,
      success: false,
      error: false,
      message: '',
    });
  },
  viewEdit: async (req, res) => {
    const { allergyid } = req.params;
    const { allergyType } = await allergyService.viewEdit(allergyid);

    res.render('edit-allergy-type', {
      user: req.user,
      allergyType,
      success: false,
      error: false,
      message: '',
    });
  },
  post: async (req, res) => {
    try {
      const { allergyName } = req.body;
      await allergyService.post(allergyName);

      res.render('create-allergy-type', {
        user: req.user,
        success: true,
        error: false,
        message: 'Tipo de alergia creado con éxito',
      });
    } catch (error) {
      return res.render('create-allergy-type', {
        user: req.user,
        success: false,
        error: true,
        message: error.message,
      });
    }
  },
  put: async (req, res) => {
    const { allergyId, allergyName } = req.body;
    await allergyService.put({ allergyId, allergyName });

    res.redirect('/panel/tipos-de-alergia?success=true&message=Tipo%20de%20alergia%20actualizado%20con%20éxito');
  },
  delete: async (req, res) => {
    const { allergyId } = req.params;
    await allergyService.delete(allergyId);

    res.redirect('/panel/tipos-de-alergia?success=true&message=Tipo%20de%20alergia%20desactivado%20con%20éxito');
  },
  reactivate: async (req, res) => {
    const { allergyId } = req.params;
    await allergyService.reactivate(allergyId);

    res.redirect('/panel/tipos-de-alergia?success=true&message=Tipo%20de%20alergia%20reactivado%20con%20éxito');
  },
};

export default allergyTypeController;
