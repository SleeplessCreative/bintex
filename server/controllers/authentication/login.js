const bcrypt = require("bcrypt");
const { pool } = require("../../db/dev/pool");
const error = require("../error");

const db = require("../../models");
const { roles } = require("../../models");
const Users = db.users;
const Roles = db.roles;

const errorFunc = (errorCode, message) => {
  const error = new Error(message);
  error.statusCode = errorCode;
  throw error;
};

/**
 *
 * @param {*} req get request data from client
 * @param {*} res send response to client
 * @param {*} next send error if something went wrong
 */

exports.login = async (req, res, next) => {
  // Parse request data
  const email = req.body.email;
  const password = req.body.password;

  console.log("ini email", email);
  console.log("ini password", password);

  try {
    const filter = {
      where: {
        email: email,
      },
      raw: true,
      include: [
        {
          model: db["roles"],
          required: true,
          attributes: ["role_id"],
        },
      ],
    };

    const findUserData = await db["users"].findAll(filter).then((data) => {
      return data;
    });

    console.log(findUserData);

    if (findUserData.length === 0) {
      console.log("masuk");
      errorFunc(401, "Wrong email/password");
    }

    const hashedPassword = findUserData[0].password_hash;

    const authorized = await bcrypt.compare(password, hashedPassword);

    if (authorized) {
      return res.status(202).json("Logged in.");
    } else {
      error.errorFunc(401, "Wrong email/password!");
    }
  } catch (error) {
    next(error);
  }
};
