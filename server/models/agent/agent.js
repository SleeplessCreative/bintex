module.exports = (Sequelize, DataTypes) => {
  const Agent = Sequelize.define("agent", {
    agent_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    district: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lat: DataTypes.STRING,
    long: DataTypes.STRING,
  });

  return Agent;
};
