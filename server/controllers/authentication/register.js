const bcrypt = require("bcrypt");
const { pool } = require("../../db/dev/pool");
const error = require("../error");

/**
 *
 * @param {*} req get request data from client
 * @param {*} res send response to client
 * @param {*} next send error if something went wrong
 */

exports.register = async (req, res, next) => {
  // Parse request data
  const userId = req.body.userId;
  const password = req.body.password;
  const email = req.body.email;
  let role = req.body.role;

  const name = req.body.name;
  const profilePicture = userId + ".jpg";
  const address = req.body.address;

  // Database insert query
  try {
    let insertRolesQueryString;

    switch (role) {
      case "CASHIER":
        insertRolesQueryString = `INSERT INTO cashiers (user_id, name, profile_picture) 
            VALUES ('${userId}', '${name}', '${profilePicture}')
            RETURNING user_id`;
        break;

      case "COSTUMER SERVICE":
        insertRolesQueryString = `INSERT INTO costumer_services (user_id, name, profile_picture) 
            VALUES ('${userId}', '${name}', '${profilePicture}')
            RETURNING user_id`;
        break;

      case "AGENT":
        insertRolesQueryString = `INSERT INTO agents (user_id, name, profile_picture, address) 
            VALUES ('${userId}', '${name}', '${profilePicture}', '${address}')
            RETURNING user_id`;
        break;

      case "DROPPOINTER":
        insertRolesQueryString = `INSERT INTO drop_pointers (user_id, name, profile_picture, address) 
            VALUES ('${userId}', '${name}', '${profilePicture}', '${address}')
            RETURNING user_id`;
        break;

      case "DRIVER":
        insertRolesQueryString = `INSERT INTO drivers (user_id, name, profile_picture) 
            VALUES ('${userId}', '${name}', '${profilePicture}')
            RETURNING user_id`;
        break;

      case "COURIER":
        insertRolesQueryString = `INSERT INTO couriers (user_id, name, profile_picture) 
            VALUES ('${userId}', '${name}', '${profilePicture}')
            RETURNING user_id`;
        break;

      default:
        insertRolesQueryString = `INSERT INTO costumers (user_id, name, profile_picture) 
            VALUES ('${userId}', '${name}', '${profilePicture}')
            RETURNING user_id`;

        role = "COSTUMER";
        break;
    }

    // Encrypt password
    const hashedPass = await bcrypt.hash(password, 10);

    const insertUsersQuery = await pool.query(
      `INSERT INTO users (user_id, password,  email, role) 
        VALUES ('${userId}', '${hashedPass}', '${email}', '${role}')
        RETURNING user_id`
    );

    const insertRolesQuery = await pool.query(insertRolesQueryString);

    const inserted =
      ((await insertUsersQuery.rows[0].user_id) &&
        (await insertRolesQuery.rows[0].user_id)) == userId
        ? true
        : false;

    if (inserted) {
      return res.status(201).json("Inserted.");
    } else {
      errorFunc(406, "Data not inserted!");
    }
  } catch (error) {
    next(error);
  }
};
