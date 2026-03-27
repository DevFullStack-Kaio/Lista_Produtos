// Importações dos módulos
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// Importação das rotas
const indexRouter = require('./routes/index.js'); 
const apiRouterV1 = require('./routes/apiRouterV1');


// Inicialização do app
const app = express();

// Middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Definição das rotas
app.use('/', indexRouter);
app.use('/api/v1', apiRouterV1);


// Exportação do app para uso no bin/www
module.exports = app;


