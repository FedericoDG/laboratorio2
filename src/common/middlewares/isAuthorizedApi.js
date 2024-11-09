import jwt from 'jsonwebtoken';

import { config } from '../../common/validateEnv.js';
import { ServerError } from '../customError.js';

export default function isAuthorizedApi(req, res, next) {
  const token = req.cookies.access_token;

  if (!token) {
    return res.status(401).json({
      status: false,
      message: 'No autorizado: Token no encontrado',
    });
  }

  try {
    const isValidToken = jwt.verify(token, config.JWT_SECRET);

    if (isValidToken) {
      req.user = jwt.decode(token, config.JWT_SECRET);
      return next();
    }

    return res.status(401).json({
      status: false,
      message: 'No autorizado: Token inválido',
    });
  } catch (error) {
    throw new ServerError(error.message);
  }
}
