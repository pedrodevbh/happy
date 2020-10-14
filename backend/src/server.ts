import express from 'express';
import './database/connection';

import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

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

