DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;

USE chat;

-- CREATE TABLE messages (
--   /* Describe your table here.*/
-- );

-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'users'
--
-- ---

-- ALTER TABLE Persons
-- ADD CONSTRAINT UC_Person UNIQUE (ID,LastName);

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

-- ---
-- Table Properties
-- ---

-- ALTER TABLE users ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE messages ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE rooms ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO users (id,username) VALUES
-- ('','');
-- INSERT INTO messages (id,text,`id_rooms`,`id_users`) VALUES
-- ('','','','');
-- INSERT INTO rooms (id,name) VALUES
-- ('','');
/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

