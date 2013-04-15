
module.exports.onload = function(platform)
{
	platform.shipper.registerAllowFolder( __dirname+"/public/" ) ;
	return true ;
}