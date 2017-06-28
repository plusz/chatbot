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

const PostType = new GraphQL.GraphQLObjectType({
        name: 'Post',
        description: 'Post Type, For all the posts present in Reddit.',

        fields: () => ({
        fundNumber: {
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
            description: 'Markdown content of the post',
        }

    })

})
;


module.exports = PostType;