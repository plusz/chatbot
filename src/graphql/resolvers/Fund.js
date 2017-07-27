/**
 * Created by porzechowski on 27/06/2017.
 */
'use strict';

const axios = require('axios');

const FundsController = {

    index: (args) => {

        //const URL = `https://www.franklintempleton.com/en-us-retail/investor/products/mutual-funds/index.page?bid=us.ppss`;
        const URL = `http://ftqa2.corp.frk.com/en-us-retail-shadow/financial-professionals/products/mutual-funds/index.page?bid=us.ppss`;

        console.log('URL:' + URL);
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
        return axios.get(URL)
                .then(
                        (response) => {
                    console.log('response:' + response);
                    console.log('response.data:' + response.data);
                    console.log('response.data:' + response.data.productsVO);
                    console.log('response.data:' + response.data.productsVO.ppsList[0].fundNumber.val);
                    const __funds = [];
                    const funds = response.data.productsVO.ppsList;

                    funds.map(fund => {
                        if (
                                (fund.fundNumber.val === args.fundNumber || !args.fundNumber)
                                &&
                                (fund.assetClass.val === args.assetClass || !args.assetClass)
                                &&
                                (fund.prntFundCategory.val === args.prntFundCategory || !args.prntFundCategory)
                                )
                        {
                            __funds.push(fund);
                        }
                    });
                    return __funds;
                })
                .catch((error) => {
                    return {error: error}
                });

    }

}

module.exports = FundsController;