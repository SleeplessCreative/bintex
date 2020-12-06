module.exports = (Sequelize, DataTypes) => {
  const Driver = Sequelize.define("driver", {
    driver_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
  });

  return Driver;
};
