import express from 'express';
import path from 'path';
import cors from 'cors';
import './database/connection';

import 'express-async-errors';

import routes from './routes';

import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler);

// Rota = conjunto
// Recurso = usuario
// Metodos HTTP = GET, POST, PUT, DELETE
// Tipos de parametros

// GET = Buscar uma informação (lista, item)
// POST = Criando uma nova informação

// PUT = Editando uma informação
// DELETE = Deletando uma informação

// Query Params: http://localhost:3333/users?search=diego => Utilizados para filtros e pode ser concatenado com &
// Route Params: DELETE http://localhost:3333/users/1 => Para identificar um recurso
// Body: http://localhost:3333/users/1 => Dados especificos vindo de formulários



app.listen(3333);
// Driver nativo, Query builder, [ORM => Maior nivel de abstração]

// Integra com qualquer banco SQL

