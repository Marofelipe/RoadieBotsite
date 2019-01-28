module.exports = function(app){
    app.get('/sobre', function(req,res){
        res.render('sobre/sobre');
    });
}