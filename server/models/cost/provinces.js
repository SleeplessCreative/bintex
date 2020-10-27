module.exports = (Sequelize, DataTypes) => {
  const Provinces = Sequelize.define(
    "provinces",
    {
      province_id: {
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
    },
    {
      timestamps: false,
    }
  );

  return Provinces;
};
