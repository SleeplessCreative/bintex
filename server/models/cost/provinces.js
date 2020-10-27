module.exports = (Sequelize, DataTypes) => {
  const Provinces = Sequelize.define("provinces", {
    provinceId: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      primaryKey: true,
    },
    province: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
  });

  return Provinces;
};
