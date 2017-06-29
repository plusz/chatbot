/**
 * Created by porzechowski on 27/06/2017.
 */
'use strict';

const axios = require('axios');

const FundsController = {

        index: ( args ) => {

		const URL = `https://www.franklintempleton.com/en-us-retail/investor/products/mutual-funds/index.page?bid=us.ppss`;

		return axios.get( URL )
			.then( (response) => {
				const __funds = [];
                const funds = response.data.productsVO.ppsList;

                funds.map( fund => {
                fund.content = fund.fundObjective;
            __funds.push( fund );
            });
            return __funds;
        })
        .catch( (error) => {
            return { error: error}
        });

    }

}

module.exports = FundsController;