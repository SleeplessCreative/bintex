const db = require("../../models");
const error = require("../error");

exports.registerAgent = async (req, res, next) => {
  const district = req.body.district;
  const address = req.body.address;
  const user_id = req.body.userId;

  try {
    const regAgent = {};
    regAgent.district = district;
    regAgent.address = address;
    regAgent.user_id = user_id;

    const objModel = db["agent"]
      .build(regAgent)
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

exports.getAllAgent = async (req, res, next) => {
  try {
    const agentData = await db["agent"].findAll().then((data) => {
      return data;
    });
    return res.status(200).json(agentData);
  } catch (error) {
    next(error);
  }
};

exports.getAllUserWithRoleAgent = async (req, res, next) => {
  try {
    const filter = {
      raw: true,
      include: [
        {
          model: db["roles"],
          required: true,
          attributes: ["role_id"],
          where: {
            role_id: 4,
          },
        },
      ],
    };
    const userWithRoleAgentData = await db["users"]
      .findAll(filter)
      .then((data) => {
        return data;
      });

    console.log(userWithRoleAgentData);
    return res.status(200).json(userWithRoleAgentData);
  } catch (error) {
    next(error);
  }
};
