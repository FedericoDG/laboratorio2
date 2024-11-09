import { check, validationResult } from 'express-validator';

const createUserDto = [
  check('userDocument')
    .matches(/^[0-9]{7,8}$/)
    .withMessage('El número de documento debe ser de 7 o 8 digitos'),
  check('lastname')
    .matches(/^[A-ZÁÉÍÓÚÑa-záéíóúñ\s]{2,}$/)
    .withMessage('El apellido tener al menos 2 caracteres y no incluir números o símbolos'),
  check('name')
    .matches(/^[A-ZÁÉÍÓÚÑa-záéíóúñ\s]{2,}$/)
    .withMessage('El nombre tener al menos 2 caracteres y no incluir números o símbolos'),
  check('password')
    .matches(/^.{6,20}$/)
    .withMessage('El nombre tener al menos 2 caracteres y no incluir números o símbolos'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

export default createUserDto;
