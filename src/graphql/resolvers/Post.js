/**
 * Created by porzechowski on 27/06/2017.
 */
'use strict';

const axios = require('axios');

const PostsController = {

        index: ( args ) => {

		const URL = `https://www.franklintempleton.com/en-us-retail/investor/products/mutual-funds/index.page?bid=us.ppss`;
        //const URL = `http://orpi.pl/download/ppsstest.json`;

		return axios.get( URL )
			.then( (response) => {
				const __posts = [];
                const posts = response.data.productsVO.ppsList;

            posts.map( post => {
                post.content = post.fundObjective;
            __posts.push( post );
            });
            return __posts;
        })
        .catch( (error) => {
            return { error: error}
        });

    }

}

module.exports = PostsController;