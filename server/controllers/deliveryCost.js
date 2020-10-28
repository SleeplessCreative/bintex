const request = require("request");

<<<<<<< HEAD
const db = require("../models");
const Provinces = db.provinces;
const Cities = db.cities;
const Urbans = db.urbans;
=======
const { pool } = require("../db/dev/pool");
const error = require("./error");
>>>>>>> 0d2f095ea73b0645116c655778b28efd48501ad7

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
<<<<<<< HEAD
  let origin = req.body.origin;
  let destination = req.body.destination;
  const weight = req.body.weight;
=======
  origin = req.body.origin;
  destination = req.body.destination;
  weight = req.body.weight;
>>>>>>> 0d2f095ea73b0645116c655778b28efd48501ad7

  origin = origin.replace(/(^\w{1})|(\s{1}\w{1})/g, (match) =>
    match.toUpperCase()
  );
  destination = destination.replace(/(^\w{1})|(\s{1}\w{1})/g, (match) =>
    match.toUpperCase()
  );
  console.log(origin);

  try {
<<<<<<< HEAD
    const originIdQuery = await Cities.findAll({
      attributes: ["city_id"],
      where: {
        city: origin,
      },
      raw: true,
    });

    const destinationIdQuery = await Cities.findAll({
      attributes: ["city_id"],
      where: {
        city: destination,
      },
      raw: true,
    });

    // console.log(originIdQuery[0], destinationIdQuery);

    // console.log(originId, destinationId);
=======
    const originIdQuery = await pool.query(
      `SELECT city_id FROM cities where city = '${origin}'`
    );

    const destinationIdQuery = await pool.query(
      `SELECT city_id FROM cities where city = '${destination}'`
    );
>>>>>>> 0d2f095ea73b0645116c655778b28efd48501ad7

    let originId;
    let destinationId;

    // console.log(originIdQuery.rowCount);
<<<<<<< HEAD
    if (originIdQuery) {
      originId = originIdQuery[0].city_id;
=======
    if (originIdQuery.rows) {
      originId = originIdQuery.rows[0].city_id;
>>>>>>> 0d2f095ea73b0645116c655778b28efd48501ad7
    } else {
      error.errorFunc(404, "Origin not found");
    }

<<<<<<< HEAD
    if (destinationIdQuery) {
      destinationId = destinationIdQuery[0].city_id;
=======
    if (destinationIdQuery.rows) {
      destinationId = destinationIdQuery.rows[0].city_id;
>>>>>>> 0d2f095ea73b0645116c655778b28efd48501ad7
    } else {
      error.errorFunc(404, "Destination not found");
    }

    // console.log(originIdQuery, destinationIdQuery);
<<<<<<< HEAD
    console.log(originId, destinationId);
=======
>>>>>>> 0d2f095ea73b0645116c655778b28efd48501ad7

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
<<<<<<< HEAD
      console.log(JSON.parse(body));
=======
      // console.log(JSON.parse(body));
>>>>>>> 0d2f095ea73b0645116c655778b28efd48501ad7
      const ongkir = JSON.parse(body).rajaongkir.results[0].costs[1].cost[0];
      // console.log(ongkir);
      return res.status(200).json(ongkir);
    });
  } catch (error) {
    throw new Error(error);
  }
};
