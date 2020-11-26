module.exports = (Sequelize, DataTypes) => {
  const Roles = Sequelize.define(
    "roles",
    {
      role_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      role_name: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      timestamps: false,
    }
  );

  return Roles;
};
