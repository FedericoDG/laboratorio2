// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  if (err.isCustom) {
    return res.status(err.statusCode).json({
      status: false,
      message: err.message,
    });
  }

  console.error(`[ERROR-HANDLER]: ${err.message}`);

  return res.status(500).json({
    status: false,
    message: 'Error interno del servidor',
  });
};

export default errorHandler;
