module.exports.contactForm = function(application, req, res){
	res.render("contact/form");// enviar como parametro o que precisa ser visto no html. Exemplo>>> {validacao : {}, noticia : {}})
}

//// Módulo que salva o formulário, conferindo se o modelo de 
//"notícia está de acordo com o esperado para ser salvo no banco de dados, e 
//imprimindo na tela do usuário as recomendações para tal."

////Deverá ser nosso formulário para contato ao invés da notícia.

/*
module.exports.noticias_salvar = function(application, req, res){
	var noticia = req.body;

	req.assert('titulo','Título é obrigatório').notEmpty();
	req.assert('resumo','Resumo é obrigatório').notEmpty();
	req.assert('resumo','Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
	req.assert('autor','Autor é obrigatório').notEmpty();
	req.assert('data_noticia','Data é obrigatório').notEmpty().isDate({format: 'YYYY-MM-DD'});
	req.assert('noticia','Noticia é obrigatório').notEmpty();

	var erros = req.validationErrors();

	if(erros){
		res.render("admin/form_add_noticia", {validacao : erros, noticia : noticia});
		return;
	}

	var connection = application.config.dbConnection();
	var noticiasModel = new application.app.models.NoticiasDAO(connection);

	noticiasModel.salvarNoticia(noticia, function(error, result){
		res.redirect('/noticias');
	});	
}
*/