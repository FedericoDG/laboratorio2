import { check, validationResult } from 'express-validator';

const loginDto = [
  check('userDocument')
    .isNumeric()
    .withMessage('Debe ser un número de documento válido')
    .isLength({ min: 7, max: 8 })
    .withMessage('El número de documento debe ser de 7 o 8 digitos'),
  check('password')
    .isLength({ min: 6 })
    .withMessage('La contraseña debe tener al menos 6 caracteres')
    .isLength({ max: 20 })
    .withMessage('La contraseña no puede tener más de 20 caracteres'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

export default loginDto;
