module.exports = function(application) {
	
	application.get('/about', function(req, res){
		application.app.controllers.about.about(application, req, res);		
	});

	//application.get('/noticia', function(req, res){
	//	application.app.controllers.noticias.noticia(application, req, res);
	//});

};