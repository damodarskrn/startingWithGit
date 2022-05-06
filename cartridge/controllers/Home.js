'use strict';

/**
 * @namespace Home
 */

var server = require('server');
var cache = require('*/cartridge/scripts/middleware/cache');

server.extend(module.superModule);
/**
 * Any customization on this endpoint, also requires update for Default-Start endpoint
 */
/**
 * Home-Show : This endpoint is called when a shopper navigates to the home page
 * @name Base/Home-Show
 * @function
 * @memberof Home
 * @param {middleware} - consentTracking.consent
 * @param {middleware} - cache.applyDefaultCache
 * @param {category} - non-sensitive
 * @param {renders} - isml
 * @param {serverfunction} - get
 */



server.append('Show',cache.applyCustomCache,function(req,res,next){
	var viewData=res.getViewData();
	viewData={
		demo1:'This is homepage is using middleware chain function',
		demo2:res.cachePeriod+''+res.cachePeriodUnit
};

	res.setViewData(viewData);
	next();

});


module.exports = server.exports();

