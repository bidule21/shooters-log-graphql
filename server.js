
import express from 'express';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import httpErrors from 'http-errors'
import schema from './graphql/schema';
import graphiql from 'graphiql';
import Competition from './models/competition-model';

const MONGO_URL = 'mongodb://localhost:27017/graphql';
const dev = process.env.NODE_ENV === 'development';


let app = express();
/** below, we are defining the route "./graphql" for express server.
 * Any request to this route are fed to the graphql-express middleware "graphqlHTTP".
  */
app.use('/graphql', graphqlHTTP(req =>({
  schema,
  context:{},
  pretty: true,
  graphiql: dev,
  formatError: (error) => {
    console.log(
    `message:  ${error.message},
    locations: ${error.locations},
    stack: ${error.stack},
    path: ${error.path}`
    );
  }
})));

mongoose.connect(MONGO_URL);
const db = mongoose.connection;
// const competitions = db.collection('competitions');
db.on('error', () => {console.log('-------FAILED to connect to mongoose'); });
db.on('open', () => { console.log('-------CONNECTED to mongoose-----'); });

let server = app.listen(8080, () => {
  console.log(`http server listening at port  ${server.address().port}
  ----------- in ${process.env.NODE_ENV}-------------`);
});