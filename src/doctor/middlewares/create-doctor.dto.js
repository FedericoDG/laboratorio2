import { check, validationResult } from 'express-validator';

const createDoctorDto = [
  check('doctorLicense')
    .matches(/^.{4,}$/)
    .withMessage('La licencia médica debe tener al menos 4 caracteres'),
  check('specialty')
    .matches(/^[A-ZÁÉÍÓÚÑa-záéíóúñ\s]{7,}$/)
    .withMessage('La especialidad ebe tener al menos 7 caracteres y no incluir números o símbolos'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

export default createDoctorDto;
