import cookieParser from 'cookie-parser';
import express from 'express';
import methodOverride from 'method-override';
import path from 'path';
import { fileURLToPath } from 'url';

import errorHandler from './src/common/errorHandler.js';
import { config } from './src/common/validateEnv.js';
import apiRouter from './src/router/api.routes.js';
import viewRouter from './src/router/view.routes.js';

// Variables
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Global middlewares
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  methodOverride(function (req) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      var method = req.body._method;
      delete req.body._method;
      return method;
    }
  }),
);

// Template Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.use('/', viewRouter);
app.use('/api', apiRouter);

// Error handler
app.use(errorHandler);

// Server init
app.listen(config.port, () => {
  console.clear();
  console.log(`Server live on: http://localhost:${config.port}`);
});
