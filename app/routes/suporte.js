module.exports = function(app){
	app.get('/suporte', function(req, res){
		res.render('suporte/suporte');
	});
}