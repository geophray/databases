DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;

USE chat;

-- ---
-- Table 'users'
--
-- ---

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(20) NOT NULL
);

-- ---
-- Table 'messages'
--
-- ---

DROP TABLE IF EXISTS messages;

CREATE TABLE messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  message_text VARCHAR(255) NOT NULL,
  id_rooms INT NOT NULL,
  id_users INT NOT NULL
);

-- ---
-- Table 'rooms'
--
-- ---

DROP TABLE IF EXISTS rooms;

CREATE TABLE rooms (
  id INT AUTO_INCREMENT PRIMARY KEY,
  roomName VARCHAR(25) NOT NULL
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE messages ADD FOREIGN KEY (id_rooms) REFERENCES rooms (id);
ALTER TABLE messages ADD FOREIGN KEY (id_users) REFERENCES users (id);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

