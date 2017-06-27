/**
 * Created by porzechowski on 27/06/2017.
 */
'use strict';

const axios = require('axios');

const PostsController = {

        index: ( args ) => {

		//const URL = `https://www.franklintempleton.com/en-us-retail/investor/products/mutual-funds/index.page?bid=us.ppss`;
        const URL = `http://orpi.pl/download/ppsstest.json`;

		return axios.get( URL )
			.then( (response) => {
				const __posts = [];
				const posts = response.productsVO.data.ppsList;

            posts.map( post => {
                post.data.content = post.fundLegalName.val;
            __posts.push( post.data );
            });
            return __posts;
        })
        .catch( (error) => {
            return { error: error, response: URL  }
        });

    }

}

module.exports = PostsController;