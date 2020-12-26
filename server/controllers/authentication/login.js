const bcrypt = require("bcrypt");
const { pool } = require("../../db/dev/pool");
const error = require("../error");

const jwt = require("jsonwebtoken");

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
          as: roles,
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

    let redirectUrl;
    switch (findUserData[0]["roles.role_id"]) {
      case 1:
        redirectUrl = "https://administrator.bintex.id";
        break;
      case 4:
        redirectUrl = "https://agent.bintex.id";
        break;
    }

    if (authorized) {
      dataToken = {
        userId: findUserData[0].user_id,
        name: findUserData[0].name,
        email: findUserData[0].email,
        pfp: findUserData[0].profile_picture,
        rolesId: findUserData[0]["roles.role_id"],
        redirectUrl: redirectUrl,
      };

      console.log(dataToken);
      const token = jwt.sign(dataToken, "bintex-secret-token", {
        expiresIn: "12h",
      });
      return res.status(202).json({
        message: "Ok",
        token: "bearer " + token,
      });
    } else {
      error.errorFunc(401, "Wrong email/password!");
    }
  } catch (error) {
    next(error);
  }
};
