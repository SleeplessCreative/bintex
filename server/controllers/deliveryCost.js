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
  originId = req.body.originId;
  destinationId = req.body.destinationId;
  weight = req.body.weight;

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
      return res.status(201).send(body);
    });
  } catch (error) {
    throw new Error(error);
  }
};
