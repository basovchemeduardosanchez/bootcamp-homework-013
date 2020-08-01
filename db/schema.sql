-- The line below is commented out to prevent data loss, uncomment if necessary
-- DROP DATABASE IF EXISTS avt_shuttle;
-- Uncomment for local initialization
-- CREATE DATABASE avt_shuttle;
-- USE avt_shuttle;
USE rohh2ch3c4my11bv

CREATE TABLE data (
    id INTEGER NOT NULL AUTO_INCREMENT,
    text VARCHAR(255) NOT NULL,
    selected BOOLEAN DEFAULT false NOT NULL,
    PRIMARY KEY (id)
);
