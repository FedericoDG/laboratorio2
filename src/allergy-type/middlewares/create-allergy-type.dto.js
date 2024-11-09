import { check, validationResult } from 'express-validator';

const createAllergyTypeDto = [
  check('allergyName')
    .matches(/^[A-ZÁÉÍÓÚÑa-záéíóúñ\s]{2,}$/)
    .withMessage('El nombre del tipo de alergia ebe tener al menos 2 caracteres y no incluir números o símbolos'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

export default createAllergyTypeDto;
