module.exports = (Sequelize, DataTypes) => {
  const Urbans = Sequelize.define("urbans", {
    urbanId: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      primaryKey: true,
    },
    urban: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
  });

  return Urbans;
};
