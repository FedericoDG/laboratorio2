import token from '../common/constant/token.js';
import { UnauthorizedError } from '../common/customError.js';
import authService from './auth.service.js';

const authController = {
  login: async function (req, res, next) {
    const { userDocument, password } = req.body;

    try {
      const { accessToken, refreshToken } = await authService.login(+userDocument, password);

      res.cookie('access_token', accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: token.ACCESS_TOKEN_EXPIRATION * 1000,
      });

      res.cookie('refresh_token', refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: token.REFRESH_TOKEN_EXPIRATION * 1000,
      });

      res.json({
        status: true,
        message: 'Login successful',
        body: {
          redirectUrl: '/panel',
        },
      });
    } catch (error) {
      next(error);
    }
  },
  refreshToken: async function (req, res, next) {
    const refreshToken = req.cookies.refresh_token;

    if (!refreshToken) return next(new UnauthorizedError('No existe un token de refresco'));

    try {
      const newAccessToken = authService.refreshToken(refreshToken);

      res.cookie('access_token', newAccessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: token.ACCESS_TOKEN_EXPIRATION * 1000,
      });

      return res.json({
        status: true,
        message: 'Token actualizada correctamente',
      });
    } catch (error) {
      next(error);
    }
  },
  logout: function (_req, res) {
    res.clearCookie('refresh_token', { path: '/' });
    res.clearCookie('access_token', { path: '/' });

    return res.json({
      status: true,
      message: 'Logout exitoso',
    });
  },
};

export default authController;
