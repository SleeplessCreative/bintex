module.exports = (Sequelize, DataTypes) => {
  const Cities = Sequelize.define("cities", {
    cityId: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      primaryKey: true,
    },
    city: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
  });

  return Cities;
};
