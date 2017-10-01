DROP DATABASE IF EXISTS friendfinder_DB;
CREATE DATABASE friendfinder_DB;

USE friendfinder_DB;

CREATE TABLE friends (
    id INTEGER(10) AUTO_INCREMENT,
    name VARCHAR(50),
    photo VARCHAR(255),
    scores varchar(20),
    totalScore FLOAT(4,1),
    PRIMARY KEY (id)
);

SELECT 
    *
FROM
    friends;
