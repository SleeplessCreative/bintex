const request = require("request");

const db = require("../models");
const Provinces = db.provinces;
const Cities = db.cities;
const Urbans = db.urbans;

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

  originIdQuery = await Cities.findAll({
    attributes: ["city_id"],
    where: {
      city: origin,
    },
    raw: true,
  });

  destinationIdQuery = await Cities.findAll({
    attributes: ["city_id"],
    where: {
      city: destination,
    },
    raw: true,
  });

  // console.log(originIdQuery[0], destinationIdQuery);
  originId = originIdQuery[0].city_id;
  destinationId = destinationIdQuery[0].city_id;

  // console.log(originId, destinationId);

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

  try {
    await request(options, function (error, response, body) {
      // console.log(body);
      return res.status(201).send(body);
    });
  } catch (error) {
    throw new Error(error);
  }
};
