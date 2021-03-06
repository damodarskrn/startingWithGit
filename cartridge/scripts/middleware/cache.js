'use strict'


var base = module.superModule;




/**
* Script file for use in the Script pipelet node.
* To define input and output parameters, create entries of the form:
*
* @<paramUsageType> <paramName> : <paramDataType> [<paramComment>]
*
* where
*   <paramUsageType> can be either 'input' or 'output'
*   <paramName> can be any valid parameter name
*   <paramDataType> identifies the type of the parameter
*   <paramComment> is an optional comment
*
* For example:
*
*-   @input ExampleIn : String This is a sample comment.
*-   @output ExampleOut : Number
*
*/

function applyCustomCache(req,res,next){
	res.cachePeriod=6;
	res.cachePeriodUnit='hours';
	next();
}

base.applyCustomCache=applyCustomCache;
module.exports=base;
