module.exports = (Sequelize, DataTypes) => {
  const History = Sequelize.define("history", {
    history_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    origin_district: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    origin_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    destination_district: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    destination_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return History;
};
