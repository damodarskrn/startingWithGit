'use strict'

var server=require('server');

server.get('Test',function(res,req,next){
    res.render('display');
    next();
});

module.exports=server.exports();