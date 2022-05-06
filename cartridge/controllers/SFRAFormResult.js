/**
* Description of the Controller and the logic it provides
*
* @module  controllers/SFRAFormResult
*/

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
// * @see {@link module:controllers/SFRAFormResult~myFunction} */
//exports.MyFunction = myFunction;

/**
 * Handles the simple form rendered by the SFRAForm.js controller.
 * 
 */


var server = require('server');
var URLUtils = require('dw/web/URLUtils');


server.post('Show', server.middleware.http,
  function(req, res, next) {

  var nickname = req.form.nickname;

  res.render('SFRAResultTemplate', {
    nickname : nickname});
   next();
  });

module.exports = server.exports();