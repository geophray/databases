var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, results) => {
        if (err) {
          console.log('Error inside messages.get: ', err);
        } else {
          console.log('Farts:', results);
          res.json(results);
        }
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var params = [req.body.text, req.body.username, req.body.roomname];
      models.messages.post(params, (err, results) => {
        if (err) { console.log('Error inside messages.post: ', err); }
        res.sendStatus(201);
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get((err, results) => {
        if (err) { console.log('Error inside users.get: ', err); }
        res.json(results);
      });
    },
    post: function (req, res) {
      console.log(req.body);
      var params = [req.body.username];
      models.users.post(params, (err, results) => {
        if (err) { console.log('Error inside users.post: ', err); }
        res.sendStatus(201);
      });
    }
  }
  // rooms: {
  //   get: function (req, res) {
  //     models.rooms.get((err, results) => {
  //       if (err) { console.log('Error inside rooms.get: ', err); }
  //       res.json(results);
  //     });
  //   },
  //   post: function (req, res) {
  //     var params = [req.body.roomname];
  //     models.rooms.post(params, (err, results) => {
  //       if (err) { console.log('Error inside rooms.post: ', err); }
  //       res.sendStatus(201);
  //     });
  //   }
  // }
};

