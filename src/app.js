/**
 * Created by porzechowski on 27/06/2017.
 */
'use strict';

const express = require('express');
const body_parser = require('body-parser');

const expressGraphQL = require('express-graphql');

// let's import the schema file we just created
const GraphQLSchema = require('./graphql/schema');


const app = express();

app.use( body_parser.json({ limit: '50mb' }) );

app.use(
    '/',
    expressGraphQL( () => {
        return {
            graphiql: false,
            schema: GraphQLSchema,
        }
    })
);

module.exports = app;
