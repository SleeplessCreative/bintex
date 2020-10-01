CREATE DATABASE bintex;

CREATE TABLE receipts (
  receipt_number VARCHAR(255) PRIMARY KEY,
  origin VARCHAR(255) NOT NULL,
  destination VARCHAR(255) NOT NULL,
  shipment_date TIMESTAMP NOT NULL,
  consignee VARCHAR(255) NOT NULL,
  shipper VARCHAR(255) NOT NULL,
  drop_point VARCHAR(255)[],
  drop_time VARCHAR(255)[]
);