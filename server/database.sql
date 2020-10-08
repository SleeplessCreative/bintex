CREATE DATABASE bintex;

CREATE TABLE receipts (
  receipt_number VARCHAR(255) PRIMARY KEY,
  origin VARCHAR(255) NOT NULL,
  destination VARCHAR(255) NOT NULL,
  shipment_date TIMESTAMP NOT NULL,
  consignee VARCHAR(255) NOT NULL,
  shipper VARCHAR(255) NOT NULL,
  drop_point VARCHAR(255)[],
  drop_time TIMESTAMP[]
);

CREATE TYPE role_t as enum(
  'CASHIER', 
  'COSTUMER SERVICE', 
  'ADMINISTRATOR', 
  'AGENT', 
  'COSTUMER', 
  'COSTUMER+', 
  'COURIER', 
  'DRIVER', 
  'DROPPOINTER'
);

CREATE TABLE users (
  user_id VARCHAR(9) PRIMARY KEY,
  email VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(100) NOT NULL,
  role role_t NOT NULL
);

INSERT INTO users(user_id, email, password, role)
  VALUES (
    '100000001', 
    'administrator@bintex.id', 
    '$2b$10$OyvV6yu/iflURkpTN8Sz2.wLMC.2hft127vKjBU5MOe2att7AfnLO', 
    'ADMINISTRATOR'
    );

CREATE TABLE administrators (
  user_id VARCHAR(9) REFERENCES users(user_id) ON UPDATE CASCADE ON DELETE RESTRICT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  profile_picture VARCHAR(15) NOT NULL
);

CREATE TABLE cashiers (
  user_id VARCHAR(9) REFERENCES users(user_id) ON UPDATE CASCADE ON DELETE RESTRICT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  profile_picture VARCHAR(15) NOT NULL
);

CREATE TABLE agents (
  user_id VARCHAR(9) REFERENCES users(user_id) ON UPDATE CASCADE ON DELETE RESTRICT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  profile_picture VARCHAR(15) NOT NULL,
  address VARCHAR(255) NOT NULL
);

CREATE TABLE costumer_services (
  user_id VARCHAR(9) REFERENCES users(user_id) ON UPDATE CASCADE ON DELETE RESTRICT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  profile_picture VARCHAR(15) NOT NULL
);

CREATE TABLE drop_pointers (
  user_id VARCHAR(9) REFERENCES users(user_id) ON UPDATE CASCADE ON DELETE RESTRICT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  profile_picture VARCHAR(15) NOT NULL,
  address VARCHAR(255) NOT NULL
);

CREATE TABLE drivers (
  user_id VARCHAR(9) REFERENCES users(user_id) ON UPDATE CASCADE ON DELETE RESTRICT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  profile_picture VARCHAR(15) NOT NULL
);

CREATE TABLE couriers (
  user_id VARCHAR(9) REFERENCES users(user_id) ON UPDATE CASCADE ON DELETE RESTRICT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  profile_picture VARCHAR(15) NOT NULL
);

CREATE TABLE costumers (
  user_id VARCHAR(9) REFERENCES users(user_id) ON UPDATE CASCADE ON DELETE RESTRICT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  profile_picture VARCHAR(15) NOT NULL
);

CREATE TABLE provinces (
  province_id SMALLINT PRIMARY KEY,
  province VARCHAR(50)
);

CREATE TABLE cities (
  city_id SMALLINT PRIMARY KEY,
  city VARCHAR(50),
  province_id SMALLINT REFERENCES provinces(province_id) ON UPDATE CASCADE ON DELETE RESTRICT
);

CREATE TABLE urbans (
  id SERIAL PRIMARY KEY,
  urban VARCHAR(50),
  sub_district VARCHAR(50),
  postal_code VARCHAR(10),
  city_id SMALLINT REFERENCES cities(city_id) ON UPDATE CASCADE ON DELETE RESTRICT
);

INSERT INTO provinces(province_id,province)
VALUES (-1, 'unknown');

INSERT INTO cities(city_id,city,province_id)
VALUES (-1, 'unknown', -1);

COPY provinces(province_id,province)
FROM '/tmp/databases/provinces.csv'
DELIMITER ','
CSV HEADER;

COPY cities(city_id,city,province_id)
FROM '/tmp/databases/cities.csv'
DELIMITER ','
CSV HEADER;

COPY urbans(id,urban,sub_district,postal_code,city_id)
FROM '/tmp/databases/urbans.csv'
DELIMITER ','
CSV HEADER;

CREATE TYPE status_t as enum(
  'DELIVERING',
  'DELIVERED'
);

ALTER TABLE receipts 
ADD COLUMN status VARCHAR(10);