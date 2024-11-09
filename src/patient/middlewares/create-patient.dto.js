import { check, validationResult } from 'express-validator';

const createPatientDto = [
  check('patientDocument')
    .isNumeric()
    .withMessage('Debe ser un número de documento válido')
    .isLength({ min: 7, max: 8 })
    .withMessage('El número de documento debe ser de 7 o 8 digitos'),
  check('lastname')
    .matches(/^[A-ZÁÉÍÓÚÑa-záéíóúñ\s]{2,}$/)
    .withMessage('El apellido tener al menos 2 caracteres y no incluir números o símbolos'),
  check('name')
    .matches(/^[A-ZÁÉÍÓÚÑa-záéíóúñ\s]{2,}$/)
    .withMessage('El nombre tener al menos 2 caracteres y no incluir números o símbolos'),
  check('socialSecurity')
    .matches(/^[A-ZÁÉÍÓÚÑa-záéíóúñ\s]{2,}$/)
    .withMessage('La obra social tener al menos 2 caracteres y no incluir números o símbolos'),
  check('birthDate')
    .matches(/^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/)
    .withMessage('No es una fecha válida'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

export default createPatientDto;
