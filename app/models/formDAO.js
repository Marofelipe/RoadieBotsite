

////Exemplos de utilização de prototypes fazendo a conexão com o banco de dados
//para cada necessidade, especificicamente. 

//Descobrir como fazer essa conexão com o MongoDB

////Exemplo de utilização na controller espefícica que vai utilizar a função prototype:
//var noticiasModel = new application.app.models.NoticiasDAO(connection); 

/*
function NoticiasDAO(connection){
	this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(callback){
	this._connection.query('select * from noticias order by data_criacao desc', callback);
}

NoticiasDAO.prototype.getNoticia = function(id_noticia, callback){
	console.log(id_noticia.id_noticia);
	this._connection.query('select * from noticias where id_noticia = ' + id_noticia.id_noticia, callback);
}

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){
	this._connection.query('insert into noticias set ? ', noticia, callback)
}

NoticiasDAO.prototype.get5UltimasNoticias = function(callback){
	this._connection.query('select * from noticias order by data_criacao desc limit 5', callback);
}

module.exports = function(){
	return NoticiasDAO;
}
*/