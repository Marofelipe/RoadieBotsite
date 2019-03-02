module.exports = function(application){

	application.get('/', function(req, res){
		application.app.controllers.home.index(application, req, res);
	});
}
module.exports = function(application){

	application.get('/pt', function(req, res){
		application.app.controllers.homePt.indexpt(application, req, res);
	});
}