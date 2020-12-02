const bcrypt = require("bcrypt");
const { pool } = require("../../db/dev/pool");
const error = require("../error");

const db = require("../../models");
const { roles } = require("../../models");
const Users = db.users;
const Roles = db.roles;

/**
 *
 * @param {*} req get request data from client
 * @param {*} res send response to client
 * @param {*} next send error if something went wrong
 */

exports.register = async (req, res, next) => {
  // Parse request data
  // const userId = req.body.userId;
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  let role = req.body.role;
  let address = null;

  // const name = req.body.name;
  // const profilePicture = userId + ".jpg";
  if (req.body.address) {
    address = req.body.address;
  }

  // Database insert query
  try {
    const hashedPass = await bcrypt.hash(password, 10);
    let insertUsersQueryString;
    let insertRolesQueryString;

<<<<<<< HEAD
    const roleId = await Roles.findAll({
      attributes: ["role_id"],
      where: {
        role_name: role,
      },
    });

    console.log(JSON.stringify(roleId));

    if (address) {
      insertUsersQueryString = await Users.create({
        name: name,
        email: email,
        password_hash: hashedPass,
        address: address,
      });

      // insertRolesQueryString = await db["users_in_roles"].create({
      //   UserId:
      // });
    } else {
      insertUsersQueryString = await Users.create({
        name: name,
        email: email,
        password_hash: hashedPass,
      });
      console.log(insertUsersQueryString.toJSON());
    }

    // Encrypt password

    // const insertUsersQuery = await pool.query(
    //   `INSERT INTO users (user_id, password,  email, role)
    //     VALUES ('${userId}', '${hashedPass}', '${email}', '${role}')
    //     RETURNING user_id`
    // );

    // const insertRolesQuery = await pool.query(insertRolesQueryString);

    // const inserted =
    //   ((await insertUsersQuery.rows[0].user_id) &&
    //     (await insertRolesQuery.rows[0].user_id)) == userId
    //     ? true
    //     : false;

    const inserted = (await insertUsersQueryString) ? true : false;
=======
    const regUser = {};
    regUser.name = name;
    regUser.email = email;
    regUser.password_hash = hashedPass;
    if (address) {
      regUser.address = address;
    }

    const roleIdQuery = await Roles.findAll({
      attributes: ["role_id"],
      where: {
        role_name: role,
      },
    });

    console.log(JSON.stringify(roleIdQuery));

    const roleId = roleIdQuery[0].role_id;
    console.log(roleId);

    const objModel = db["users"].build(regUser);
    objModel
      .save()
      .then((data) => {
        console.log("ini data", data);
        data["setRoles"](roleId)
          .then((data2) => {
            console.log("ini data2", data2);
            console.log("roles are set");
          })
          .catch((err2) => {
            console.log(err2);
          });
      })
      .catch((err) => {
        console.log(err);
      });

    const inserted = (await objModel) ? true : false;
>>>>>>> authentication

    if (inserted) {
      return res.status(201).json("Inserted.");
    } else {
      errorFunc(406, "Data not inserted!");
    }
  } catch (error) {
    next(error);
  }
};
