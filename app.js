'use strict';

import express from 'express';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';

import schema from './graphql';

let app = express();

app.use('./graphql', graphqlHTTP((res) => ({
  schema,
  pretty: true,
})));

mongoose.connect('mongodb://localhost/graphql');

let server = app.listen(8080, () => {
  cosole.log('listening at port', server.address().port);
});