import bcrypt from 'bcryptjs';

import role from '../common/constant/role.js';
import { ServerError } from '../common/customError.js';
import db from '../common/db.js';

const userService = {
  viewAll: async () => {
    try {
      const users = await db.user.findMany({
        where: {
          role: role.ADMIN,
        },
      });

      return { users };
    } catch (error) {
      throw new ServerError(error.message);
    }
  },
  viewEdit: async (userDocument) => {
    try {
      const userToUpdate = await db.user.findUnique({ where: { userDocument } });

      return { userToUpdate };
    } catch (error) {
      throw new ServerError(error.message);
    }
  },
  post: ({ userDocument, lastname, name, password }) => {
    try {
      return db.user.create({
        data: {
          userDocument,
          lastname,
          name,
          password: bcrypt.hashSync(password, 10),
          role: role.DOCTOR,
        },
      });
    } catch (error) {
      if (error.code === 'P2002') {
        throw new Error('Ya existe un médico con esa matrícula');
      }
      throw new ServerError(error.message);
    }
  },
  postAsync: async ({ userDocument, lastname, name, password }) => {
    try {
      return await db.user.create({
        data: {
          userDocument,
          lastname,
          name,
          password: bcrypt.hashSync(password, 10),
          role: role.ADMIN,
        },
      });
    } catch (error) {
      if (error.code === 'P2002') {
        throw new Error('Ya existe un administrador con esa matrícula');
      }
      throw new ServerError(error.message);
    }
  },
  put: ({ userDocument, lastname, name, password }) => {
    try {
      const hashedPassword = password ? bcrypt.hashSync(password, 10) : undefined;

      return db.user.update({
        where: {
          userDocument: userDocument,
        },
        data: {
          lastname: lastname,
          name: name,
          ...(hashedPassword && { password: hashedPassword }),
        },
      });
    } catch (error) {
      throw new ServerError(error.message);
    }
  },
  putAsync: async ({ userDocument, lastname, name, password }) => {
    try {
      const hashedPassword = password ? bcrypt.hashSync(password, 10) : undefined;

      return await db.user.update({
        where: {
          userDocument: userDocument,
        },
        data: {
          lastname: lastname,
          name: name,
          ...(hashedPassword && { password: hashedPassword }),
        },
      });
    } catch (error) {
      throw new ServerError(error.message);
    }
  },
  delete: async (userDocument) => {
    try {
      await db.user.update({
        where: { userDocument },
        data: { isActive: false },
      });
    } catch (error) {
      throw new ServerError(error.message);
    }
  },
  reactivate: async (userDocument) => {
    try {
      await db.user.update({
        where: { userDocument },
        data: { isActive: true },
      });
    } catch (error) {
      throw new ServerError(error.message);
    }
  },
};

export default userService;
