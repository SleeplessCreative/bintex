module.exports = (Sequelize, DataTypes) => {
  const Receipts = Sequelize.define("receipts",{
    receiptNumber: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      primaryKey: true
    },
    status: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: false,
    },
    dropPoint: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      unique: false,
      allowNull: false,
    },
    dropTime: {
      type: DataTypes.ARRAY(DataTypes.DATE),
      unique: false,
      allowNull: false,
    },
  });

  return Receipts;
};