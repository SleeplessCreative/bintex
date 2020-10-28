module.exports = (Sequelize, DataTypes) => {
  const Invoices = Sequelize.define("invoices", {
    invoiceNumber: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      primaryKey: true,
    },
    pengirim: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: false,
    },
    noHpPengirim: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: false,
    },
    alamatPengirim: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: false,
    },
    asal: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: false,
    },
    penerima: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: false,
    },
    noHpPenerima: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: false,
    },
    tujuan: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: false,
    },
    alamatPenerima: {
      type: DataTypes.STRING,
      unique: false,
      allowNull: false,
    },
    deskripsi: {
      type: DataTypes.TEXT,
      unique: false,
      allowNull: false,
    },
    berat: {
      type: DataTypes.INTEGER,
      unique: false,
      allowNull: false,
    },
    biaya: {
      type: DataTypes.INTEGER,
      unique: false,
      allowNull: false,
    },
    tanggalPengiriman: {
      type: DataTypes.DATE,
      unique: false,
      allowNull: false,
    },
  });

  return Invoices;
};
