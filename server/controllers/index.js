var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, results) => {
        res.json(results);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var params = [req.body[text], req.body[username], req.body[roomname]];
      models.messages.post(params, (err, results) => {
        res.json(results);
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get((err, res) => {
        res.json(results);
      });
    },
    post: function (req, res) {
      var params = [req.body[username]];
      models.users.post(params, (err, result) => {
        res.json(results);
      });
    }
  },
  rooms: {
    get: function (req, res) {
      models.rooms.get((err, results) => {
        res.json(results);
      });
    },
    post: function (req, res) {
      var params = [req.body[roomname]];
      models.rooms.post(params, (err, results) => {
        res.json(results);
      });
    }
  }
};

