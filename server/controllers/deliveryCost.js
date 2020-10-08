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
  const origin = req.body.origin;
  const destination = req.body.destination;
  const weight = req.body.weight;

  origin = origin.replace(/(^\w{1})|(\s{1}\w{1})/g, (match) =>
    match.toUpperCase()
  );
  destination = destination.replace(/(^\w{1})|(\s{1}\w{1})/g, (match) =>
    match.toUpperCase()
  );
  console.log(origin);

  try {
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

    let originId;
    let destinationId;

    // console.log(originIdQuery.rowCount);
    if (originIdQuery) {
      originId = originIdQuery[0].city_id;
    } else {
      error.errorFunc(404, "Origin not found");
    }

    if (destinationIdQuery) {
      destinationId = destinationIdQuery.city_id;
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
