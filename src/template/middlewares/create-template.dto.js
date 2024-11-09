import { check, validationResult } from 'express-validator';

const createTemplateDto = [
  check('name')
    .matches(/^[A-ZÁÉÍÓÚÑa-záéíóúñ0-9\-]{2,}$/)
    .withMessage('El nombre debe tener al menos 2 caracteres. Sólo letras, números y guiones ("-")'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

export default createTemplateDto;
