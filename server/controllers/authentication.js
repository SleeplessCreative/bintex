const bcrypt = require("bcrypt");
const { pool } = require("../db/dev/pool");

/**
 *
 * @param {*} errorCode error code
 * @param {*} message message that explaining the error(s)
 */

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
  const userId = req.body.userId;
  const password = req.body.password;

  // Select data from db and compare the password
  try {
    const userData = await pool.query(
      "SELECT password FROM users WHERE user_id = $1",
      [userId]
    );

    if (!userData.rows[0]) {
      errorFunc(401, "Wrong username/password!");
    }

    // console.log(userData);

    const userPassword = await userData.rows[0].password;

    if (await !userPassword) {
      errorFunc(401, "Wrong username/password!");
    }

    const authorized = await bcrypt.compare(password, userPassword);

    if (authorized) {
      return res.status(202).json("Logged in.");
    } else {
      errorFunc(401, "Wrong username/password!");
    }
  } catch (error) {
    next(error);
  }
};
