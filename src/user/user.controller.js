import userService from './user.service.js';

const userController = {
  viewAll: async (req, res) => {
    let success = false;
    let error = false;
    let message = '';

    if (req.query.success) {
      success = true;
    }

    if (req.query.error) {
      error = true;
    }

    if (req.query.message) {
      message = req.query.message;
    }

    const { users } = await userService.viewAll();

    res.render('get-users', {
      user: req.user,
      users,
      success,
      error,
      message,
    });
  },
  viewCreate: async (req, res) => {
    res.render('create-user', {
      user: req.user,
      success: false,
      error: false,
      message: '',
    });
  },
  viewEdit: async (req, res) => {
    const { userDocument } = req.params;
    const { userToUpdate } = await userService.viewEdit(+userDocument);

    res.render('edit-user', {
      user: req.user,
      userToUpdate,
      success: false,
      error: false,
      message: '',
    });
  },
  put: async (req, res) => {
    const { userDocument, lastname, name, password } = req.body;
    await userService.putAsync({ userDocument: +userDocument, lastname, name, password });

    res.redirect('/panel/usuarios?success=true&message=Administrador actualizado con éxito');
  },
  post: async (req, res) => {
    try {
      const { userDocument, lastname, name, password } = req.body;
      await userService.postAsync({ userDocument: +userDocument, lastname, name, password });

      res.render('create-user', {
        user: req.user,
        success: true,
        error: false,
        message: 'Administrador creado con éxito',
      });
    } catch (error) {
      return res.render('create-user', {
        user: req.user,
        success: false,
        error: true,
        message: error.message,
      });
    }
  },
  delete: async (req, res) => {
    const { userDocument } = req.params;

    if (req.user.userDocument === +userDocument) {
      return res.redirect('/panel/usuarios?error=true&message=No puedes desactivarte a ti mismo');
    }

    await userService.delete(+userDocument);

    res.redirect('/panel/usuarios?success=true&message=Administrador desactivado con éxito');
  },
  reactivate: async (req, res) => {
    const { userDocument } = req.params;

    if (req.user.userDocument === +userDocument) {
      return res.redirect('/panel/usuarios?error=true&message=No puedes reactivarte a ti mismo');
    }

    await userService.reactivate(+userDocument);

    res.redirect('/panel/usuarios?success=true&message=Administrador reactivado con éxito');
  },
};

export default userController;
