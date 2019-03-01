module.exports = function(application){
	application.get('/contact', function(req, res){
		application.app.controllers.contact.contactForm(application, req, res);
	});

////Chama o módulo responsável por salvar a "notícia", que no caso será nosso
//formulário para contato.

/*
	application.post('/noticias/salvar', function(req, res){
		application.app.controllers.admin.noticias_salvar(application, req, res);
	});
*/
}