import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import token from '../common/constant/token.js';
import { UnauthorizedError } from '../common/customError.js';
import db from '../common/db.js';
import { config } from '../common/validateEnv.js';

const authService = {
  login: async function (userDocument, password) {
    const user = await db.user.findUnique({ where: { userDocument }, include: { doctor: true } });

    if (!user) throw new UnauthorizedError('Usuario no encontrado');

    if (!user.isActive) throw new UnauthorizedError('Usuario inhabilidado');

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) throw new UnauthorizedError('Las credenciales no coinciden');

    const accessToken = jwt.sign(
      {
        userDocument: user.userDocument,
        lastname: user.lastname,
        name: user.name,
        doctor: user.doctor,
        role: user.role,
        isActive: user.isActive,
      },
      config.JWT_SECRET,
      {
        expiresIn: token.ACCESS_TOKEN_EXPIRATION,
      },
    );
    const refreshToken = jwt.sign(
      {
        userDocument: user.userDocument,
        lastname: user.lastname,
        name: user.name,
        doctor: user.doctor,
        role: user.role,
        isActive: user.isActive,
      },
      config.JWT_SECRET,
      {
        expiresIn: token.REFRESH_TOKEN_EXPIRATION,
      },
    );

    delete user.password;

    return { accessToken, refreshToken, user };
  },
  refreshToken: function (refreshToken) {
    const decoded = jwt.decode(refreshToken, config.JWT_SECRET);
    const newAccessToken = jwt.sign(
      {
        userDocument: decoded.userDocument,
        lastname: decoded.lastname,
        name: decoded.name,
        doctor: decoded.doctor,
        role: decoded.role,
        isActive: user.isActive,
      },
      config.JWT_SECRET,
      {
        expiresIn: token.ACCESS_TOKEN_EXPIRATION,
      },
    );

    return newAccessToken;
  },
};

export default authService;
