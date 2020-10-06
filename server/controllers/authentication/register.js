const bcrypt = require("bcrypt");
const { pool } = require("../../db/dev/pool");
const error = require("../error");

/**
 *
 * @param {*} req get request data from client
 * @param {*} res send response to client
 * @param {*} next send error if something went wrong
 */

// exports.registerAdmin = async (req, res, next) => {
//     // Parse request data
//     const userId = req.body.userId;
//     const password = req.body.password;
//     const name = req.body.name;
//     const email = req.body.email;
//     const role = "admin";

//     // Insert admin data
//     try {
//       // Encrypt password
//       const hashedPass = await bcrypt.hash(password, 10);

//       const insertQuery = await pool.query(
//         `INSERT INTO cebete.users (user_id, password, name, email, role)
//         VALUES ('${userId}', '${hashedPass}', '${name}', '${email}', '${role}')
//         RETURNING user_id`
//       );

//       const inserted =
//         (await insertQuery.rows[0].user_id) == userId ? true : false;

//       if (inserted) {
//         return res.status(201).json("Inserted.");
//       } else {
//         errorFunc(406, "Data not inserted!");
//       }
//     } catch (error) {
//       next(error);
//     }
//   };

exports.registerCostumer = async (req, res, next) => {
  // Parse request data
  const userId = req.body.userId;
  const password = req.body.password;
  const email = req.body.email;
  const role = "COSTUMER";

  const name = req.body.name;
  const profilePicture = userId + ".jpg";

  // Insert participant's data
  try {
    // Encrypt password
    const hashedPass = await bcrypt.hash(password, 10);

    const insertUsersQuery = await pool.query(
      `INSERT INTO users (user_id, password,  email, role) 
        VALUES ('${userId}', '${hashedPass}', '${email}', '${role}')
        RETURNING user_id`
    );

    const insertCostumersQuery = await pool.query(
      `INSERT INTO costumers (user_id, name,  profile_picture) 
          VALUES ('${userId}', '${name}', '${profilePicture}')
          RETURNING user_id`
    );

    const inserted =
      ((await insertUsersQuery.rows[0].user_id) &&
        (await insertCostumersQuery.rows[0].user_id)) == userId
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
