var app = require('./config/server');

var rotaHome = require('./app/routes/home')(app);

var rotaProdutos = require('./app/routes/produtos')(app);

var rotaSobre = require('./app/routes/sobre')(app);

var rotaContato = require('./app/routes/contato')(app);

var rotaSuporte = require('./app/routes/suporte')(app);

app.listen(3000, function(){
    console.log("Roadiebot - Servidor ON");
});