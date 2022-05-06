
'use strict';

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
// * @see {@link module:controllers/Start~myFunction} */
//exports.MyFunction = myFunction;

var server=require('server');
var cache=require('*/cartridge/scripts/middleware/cache');

server.get('Start',cache.applyDefaultCache,function(req,res,next){

	var site=require('dw/system/Site');
	
	//res.render('helloWorld', {param1 : site.current.name});

	res.json({param2:site.current.name});
	
	next();

	


});

module.exports = server.exports();
