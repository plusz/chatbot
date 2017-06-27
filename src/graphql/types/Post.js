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
        fund: {
            type: dataType,
            val: {
                type: GraphQLString
            }
        },
        fundShortName: {
            type: dataType,
            val: {
                type: GraphQLString,
                description: 'Title of the post'
            }
        },
        fundObjective: {
            type: GraphQLString
        },
        inception_dt: {
            type: dataType,
            val: {
                type: GraphQLString,
                description: 'Name of the Author who created this post'
            }
        },

        content: {
            type: GraphQLString,
            description: 'Markdown content of the post'
        }

    })

})
;


module.exports = PostType;