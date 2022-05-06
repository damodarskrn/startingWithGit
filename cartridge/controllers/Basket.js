/**
* Description of the Controller and the logic it provides
*
* @module  controllers/Basket
*/

'use strict';
var server=require('server');

// HINT: do not put all require statements at the top of the file
// unless you really need them for all functions

/**
* Description of the function
*
* @return {String} The string 'myFunction'
*/
// var myFunction = function(){
//     return 'myFunction';
// }

/* Exports of the controller */
///**
// * @see {@link module:controllers/Basket~myFunction} */
//exports.MyFunction = myFunction;

server.get('Show',function(req,res,next){
	var BasketMgr=require('dw/order/BasketMgr');
	var Basket=BasketMgr.getCurrentBasket();	
	res.render('basket',{basket:Basket});
	next();
});

module.exports=server.exports();