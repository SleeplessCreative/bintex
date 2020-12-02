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

    if (inserted) {
      return res.status(201).json("Inserted.");
    } else {
      errorFunc(406, "Data not inserted!");
    }
  } catch (error) {
    next(error);
  }
};
