var setting = require('../settings'),
    Db = require('mongodb').Db,
    Connection = require('mongodb').connect,
    Server = require('mongodb').Server;

module.exports = new Db(setting.db, new Server(setting.host, 27017, {}, { safe: true }));