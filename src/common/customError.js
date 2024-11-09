export class CustomError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
    this.isCustom = true;
  }
}

export class ValidationError extends CustomError {
  constructor(message = 'Error de validación') {
    super(400, message);
  }
}

export class UnauthorizedError extends CustomError {
  constructor(message = 'No autorizado') {
    super(401, message);
  }
}

export class NotFoundError extends CustomError {
  constructor(message = 'Recurso no encontrado') {
    super(404, message);
  }
}

export class ServerError extends CustomError {
  constructor(message = 'Error interno del servidor') {
    super(500, message);
  }
}
