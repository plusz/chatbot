/**
 * Created by porzechowski on 27/06/2017.
 */
'use strict';

const GraphQL = require('graphql');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLInt,
} = GraphQL;


var dataType = new GraphQL.GraphQLObjectType({
    name: 'FttData',
    fields: {
        val: { type: GraphQLString }
    }
});

const FundType = new GraphQL.GraphQLObjectType({
        name: 'Fund',
        description: 'Fund Type, For all the funds present in PPSS.',

        fields: () => ({
        fundNumber: {
                type: dataType,
                val: {
                    type: GraphQLString
                }
        },
        nav: {
                type: dataType
        },
        navChng: {
            type: dataType,
            val: {
                type: GraphQLString
            }
        },
        cusip: {
            type: dataType,
            val: {
                type: GraphQLString
            }
        },
        assetClass: {
            type: dataType,
            val: {
                type: GraphQLString
            }
        },
        fundLegalName: {
            type: dataType,
            val: {
                type: GraphQLString
            }
        },
        content: {
            type: GraphQLString,
            description: 'Markdown content of the fund',
        }

    })

})
;


module.exports = FundType;