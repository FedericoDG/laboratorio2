import role from '../../common/constant/role.js';
import { UnauthorizedError } from '../customError.js';

export default function isAdminRoute(req, _res, next) {
  if (req.user.role !== role.ADMIN) throw new UnauthorizedError('Permisos insuficientes');

  next();
}
