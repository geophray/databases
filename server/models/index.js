var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      // a function which produces all the messages
      var queryString = 'SELECT messages.id, messages.text, rooms.roomname, users.username FROM messages LEFT OUTER JOIN users ON (messages.id_users = users.id) LEFT OUTER JOIN rooms ON (messages.id_rooms = rooms.id)';
      db.query(queryString, (err, results) => {
        if (err) {
          callback(err);
        }
        callback(results);
      });
    },
    post: function (params, callback) {
      var queryString = 'INSERT INTO messages (text, userid, roomname) VALUES (?, (SELECT id FROM users WHERE username = ? limit 1), (SELECT id FROM rooms WHERE roomname = ? limit 1))';

      db.query(queryString, params, (err, results) => {
        if (err) {
          callback(err);
        }
        callback(result);
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
        callback(results);
      });
    },
    post: function (params, callback) {
      //create user
      var queryString = 'INSERT INTO users (username) VALUES (?)';

      db.query(queryString, params, (err, results) => {
        if (err) {
          callback(err);
        }
        callback(result);
      });
    }
  },
  rooms: {
    // Ditto as above.
    get: function (callback) {
      // get all rooms
      var queryString = 'SELECT * FROM rooms';
      db.query(queryString, (err, results) => {
        if (err) {
          callback(err);
        }
        callback(results);
      });
    },
    post: function (params, callback) {
      //create room
      var queryString = 'INSERT INTO rooms (roomname) VALUES (?)';

      db.query(queryString, params, (err, results) => {
        if (err) {
          callback(err);
        }
        callback(result);
      });
    }
  }
};

