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
  user_id VARCHAR(9) REFERENCES users(user_id) PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  profile_picture VARCHAR(15) NOT NULL
);

CREATE TABLE cashiers (
  user_id VARCHAR(9) REFERENCES users(user_id) PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  profile_picture VARCHAR(15) NOT NULL
);

CREATE TABLE agents (
  user_id VARCHAR(9) REFERENCES users(user_id) PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  profile_picture VARCHAR(15) NOT NULL,
  address VARCHAR(255) NOT NULL
);

CREATE TABLE costumer_services (
  user_id VARCHAR(9) REFERENCES users(user_id) PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  profile_picture VARCHAR(15) NOT NULL
);

CREATE TABLE drop_pointers (
  user_id VARCHAR(9) REFERENCES users(user_id) PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  profile_picture VARCHAR(15) NOT NULL,
  address VARCHAR(255) NOT NULL
);

CREATE TABLE drivers (
  user_id VARCHAR(9) REFERENCES users(user_id) PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  profile_picture VARCHAR(15) NOT NULL
);

CREATE TABLE couriers (
  user_id VARCHAR(9) REFERENCES users(user_id) PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  profile_picture VARCHAR(15) NOT NULL
);

CREATE TABLE costumers (
  user_id VARCHAR(9) REFERENCES users(user_id) PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  profile_picture VARCHAR(15) NOT NULL
);