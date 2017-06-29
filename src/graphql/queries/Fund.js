/**
 * Created by porzechowski on 27/06/2017.
 */

'use strict';

const GraphQL = require('graphql');
const {
    GraphQLList,
    GraphQLString,
    GraphQLNonNull,
} = GraphQL;

// import the Fund type we created
const FundType = require('../types/Fund');

// import the Fund resolver we created
const FundResolver = require('../resolvers/Fund');


module.exports = {

    index() {
        return {
            type: new GraphQLList(FundType),
            description: 'This will return all the funds we find in the given fundnumber.',
            args: {
                fundnumber: {
                    type: GraphQLString,
                    description: 'Please enter fundnumber name',
                }
            },
            resolve(parent, args, context, info) {
                return FundResolver.index(args);
            }
        }
    },

};
