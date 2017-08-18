var login = require('./login');
module.exports = function (app) {
  app.get('/', function (req, res) {
    res.render('index');
  });

  app.get('/login', function (req, res) {
    res.render('login');
  });

  app.post('/login', function (req, res) {
    login.login(req, res);
  });
}


