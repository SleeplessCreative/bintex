const axios = require("axios");
const request = require("request");

const { pool } = require("../db/dev/pool");
const error = require("./error");

const dotenv = require("dotenv");

dotenv.config();

exports.getCityId = async (req, res, next) => {
  const optionsCity = {
    method: "GET",
    url: "https://api.rajaongkir.com/starter/city",
    qs: { id: "", province: "" },
    headers: { key: process.env.API_ONGKIR },
  };

  request(optionsCity, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
    return res.status(201).send(body);
  });
};

exports.getCost = async (req, res, next) => {
  origin = req.body.origin;
  destination = req.body.destination;
  weight = req.body.weight;

  origin = origin.replace(/(^\w{1})|(\s{1}\w{1})/g, (match) =>
    match.toUpperCase()
  );
  destination = destination.replace(/(^\w{1})|(\s{1}\w{1})/g, (match) =>
    match.toUpperCase()
  );
  console.log(origin);

  try {
    const originIdQuery = await pool.query(
      `SELECT city_id FROM cities where city = '${origin}'`
    );

    const destinationIdQuery = await pool.query(
      `SELECT city_id FROM cities where city = '${destination}'`
    );

    let originId;
    let destinationId;

    // console.log(originIdQuery.rowCount);
    if (originIdQuery.rows) {
      originId = originIdQuery.rows[0].city_id;
    } else {
      error.errorFunc(404, "Origin not found");
    }

    if (destinationIdQuery.rows) {
      destinationId = destinationIdQuery.rows[0].city_id;
    } else {
      error.errorFunc(404, "Destination not found");
    }

    // console.log(originIdQuery, destinationIdQuery);

    const options = {
      method: "POST",
      url: "https://api.rajaongkir.com/starter/cost",
      headers: {
        key: process.env.API_ONGKIR,
        "content-type": "application/x-www-form-urlencoded",
      },
      form: {
        origin: originId,
        destination: destinationId,
        weight: parseInt(weight),
        courier: "jne",
      },
    };
    await request(options, function (error, response, body) {
      // console.log(JSON.parse(body));
      const ongkir = JSON.parse(body).rajaongkir.results[0].costs[1].cost[0];
      // console.log(ongkir);
      return res.status(200).json(ongkir);
    });
  } catch (error) {
    throw new Error(error);
  }
};
