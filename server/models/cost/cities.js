module.exports = (Sequelize, DataTypes) => {
  const Cities = Sequelize.define(
    "cities",
    {
      city_id: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        primaryKey: true,
      },
      city: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );

  return Cities;
};
