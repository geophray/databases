var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      // a function which produces all the messages
      var queryString = 'SELECT messages.id, messages.text, users.username, messages.roomname FROM messages LEFT OUTER JOIN users ON messages.id_users = users.id';
      db.query(queryString, (err, results) => {
        if (err) {
          callback(err);
        } else {
          callback(null, results);
        }
      });
    },
    post: function (params, callback) {
      var queryString = 'INSERT INTO messages (text, id_users, roomname) VALUES (?, (SELECT id FROM users WHERE username = ? limit 1), ?)';

      db.query(queryString, params, (err, results) => {
        if (err) {
          callback(err);
        }
        callback(null, results);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      // get all users
      var queryString = 'SELECT * FROM users';
      db.query(queryString, (err, results) => {
        if (err) {
          callback(err);
        }
        callback(null, results);
      });
    },
    post: function (params, callback) {
      //create user
      var queryString = 'INSERT INTO users (username) VALUES (?)';

      db.query(queryString, params, (err, results) => {
        if (err) {
          callback(err);
        }
        callback(null, results);
      });
    }
  }

  // rooms: {
  //   // Ditto as above.
  //   get: function (callback) {
  //     // get all rooms
  //     var queryString = 'SELECT * FROM rooms';
  //     db.query(queryString, (err, results) => {
  //       if (err) {
  //         callback(err);
  //       }
  //       callback(results);
  //     });
  //   },
  //   post: function (params, callback) {
  //     //create room
  //     var queryString = 'INSERT INTO rooms (roomname) VALUES (?)';

  //     db.query(queryString, params, (err, results) => {
  //       if (err) {
  //         callback(err);
  //       }
  //       callback(results);
  //     });
  //   }
  // }
};

