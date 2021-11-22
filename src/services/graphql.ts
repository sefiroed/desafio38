const { SchemaComposer } = require('graphql-compose');
// const { CarQuery, CarMutation } = require('../controllers/carproducts');
const { TaskQuery, TaskMutation } = require('../controllers/tasks');
// import { SchemaComposer } from 'graphql-compose';
// import { TaskQuery, TaskMutation } from '../controllers/tasks';


const schemaComposer = new SchemaComposer();

schemaComposer.Query.addFields({
  // ...CarQuery,
  ...TaskQuery
});

schemaComposer.Mutation.addFields({
  // ...CarMutation,
  ...TaskMutation
});

export const graphQLMainSchema = schemaComposer.buildSchema();
