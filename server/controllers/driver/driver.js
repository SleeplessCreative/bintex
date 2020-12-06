const db = require("../../models");
const error = require("../error");

exports.deliver = async (req, res, next) => {
  const agentOriginId = req.body.agentOriginId;
  const agentDestinationId = req.body.agentDestinationId;
  const driverId = req.body.driverId;

  try {
    const originDataQuery = db["agent"]
      .findByPk(parseInt(agentOriginId))
      .then((data) => {
        // console.log("origin", data);
        return data;
      });
    const destinationDataQuery = db["agent"]
      .findByPk(agentDestinationId)
      .then((data) => {
        // console.log("destination", data);
        return data;
      });

    const originData = await originDataQuery;
    const destinationData = await destinationDataQuery;

    console.log("origin", await originData);
    console.log("destination", await destinationData);
    const deliveryData = {};
    deliveryData.origin_district = originData.district;
    deliveryData.origin_id = "Agent " + originData.agent_id;
    deliveryData.destination_district = destinationData.district;
    deliveryData.destination_id = "Agent " + destinationData.agent_id;
    deliveryData.driver_id = driverId;
    console.log(deliveryData);

    const objModel = db["driverHistory"]
      .build(deliveryData)
      .save()
      .then((data) => {
        console.log(data);
        return data;
      });

    if (await objModel) {
      return res.status(201).json("Inserted");
    } else {
      error.errorFunc(406, "Data not inserted!");
    }
  } catch (error) {
    next(error);
  }
};

exports.getHistory = async (req, res, next) => {
  const driverId = req.body.driverId;
  try {
    const filter = {
      raw: true,
      include: [
        {
          model: db["driver"],
          as: "as_driver_id",
          required: true,
          attributes: ["driver_id"],
          where: {
            driver_id: driverId,
          },
        },
      ],
    };
    const driverHistory = await db["driverHistory"]
      .findAll(filter)
      .then((data) => {
        return data;
      });

    console.log(driverHistory);
    return res.status(200).json(driverHistory);
  } catch (error) {
    next(error);
  }
};

exports.registerDriver = async (req, res, next) => {
  const user_id = req.body.userId;

  try {
    const regDriver = {};
    regDriver.user_id = user_id;

    const objModel = db["driver"]
      .build(regDriver)
      .save()
      .then((data) => {
        console.log(data);
        return data;
      });
    if (await objModel) {
      return res.status(201).json("Inserted");
    } else {
      error.errorFunc(406, "Data not inserted!");
    }
  } catch (error) {
    next(error);
  }
};

exports.getAllDriver = async (req, res, next) => {
  try {
    const driverData = await db["driver"].findAll().then((data) => {
      return data;
    });
    return res.status(200).json(driverData);
  } catch (error) {
    next(error);
  }
};

exports.getAllUserWithRoleDriver = async (req, res, next) => {
  try {
    const filter = {
      raw: true,
      include: [
        {
          model: db["roles"],
          required: true,
          attributes: ["role_id"],
          where: {
            role_id: 6,
          },
        },
      ],
    };
    const userWithRoleDriverData = await db["users"]
      .findAll(filter)
      .then((data) => {
        return data;
      });

    console.log(userWithRoleDriverData);
    return res.status(200).json(userWithRoleDriverData);
  } catch (error) {
    next(error);
  }
};
