const request = require("request");

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
  originId = req.body.origin;
  destinationId = req.body.destination;
  weight = req.body.weight;

  console.log(originId, destinationId);

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
      console.log(body);
      return res.status(201).send(body);
    });
  } catch (error) {
    throw new Error(error);
  }
};
