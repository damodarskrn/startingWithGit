/**
* Description of the Controller and the logic it provides
*
* @module  controllers/Newsletter
*/

'use strict';



var server=require('server');
var URLUtils = require('dw/web/URLUtils');

server.get('Show',server.middleware.https,
function (req,res,next){
var actionUrl=dw.web.URLUtils.url('Newsletter-Handler');
var reActionUrl=dw.web.URLUtils.url('Newsletter-Show');
var newsletterForm=server.forms.getForm('newsletter');
newsletterForm.clear();
res.render('newsletter/newslettersignup',{
	actionUrl:actionUrl,
	newsletterForm:newsletterForm,
	reActionUrl:reActionUrl

});

next();

});

server.post(
    'Handler',
    server.middleware.https,
    function (req, res, next) {
        var newsletterForm = server.forms.getForm('newsletter');
        var continueUrl = dw.web.URLUtils.url('Newsletter-Show');

        // Perform any server-side validation before this point, and invalidate form accordingly
        if (newsletterForm.valid) {
            // Send back a success status, and a redirect to another route
            res.json({
                success: true,
				redirectUrl:URLUtils.url('Newsletter-Success').toString()
            });
        } else {
            // Handle server-side validation errors here: this is just an example
            res.json( {
				error:true,
				redirectUrl:URLUtils.url('Error-Start').toString()
            });
        }

        next();
    }
);

server.get(
    'Success',
    server.middleware.https,
    function (req, res, next) {
        res.render('/newsletter/newslettersuccess', {
            continueUrl: URLUtils.url('Newsletter-Show'),
            newsletterForm: server.forms.getForm('newsletter')
        });

        next();
    }
);

module.exports=server.exports();
