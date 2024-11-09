import jwt from 'jsonwebtoken';

import { ServerError } from '../customError.js';
import { config } from '../validateEnv.js';

export default function isAuthorizedRoute(req, res, next) {
  const token = req.cookies.access_token;

  if (!token) {
    return res.redirect('/?error=session_expired');
  }

  try {
    const isValidToken = jwt.verify(token, config.JWT_SECRET);

    if (isValidToken) {
      req.user = jwt.decode(token, config.JWT_SECRET);
      return next();
    }

    return res.redirect('/?error=invalid_token');
  } catch (error) {
    throw new ServerError(error.message);
  }
}
