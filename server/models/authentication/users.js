module.exports = (Sequelize, DataTypes) => {
  const Users = Sequelize.define("users", {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password_hash: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profile_picture: DataTypes.STRING,
    address: DataTypes.STRING,
  });

  return Users;
};
