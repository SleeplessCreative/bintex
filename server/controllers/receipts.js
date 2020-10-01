const pool = require("../db/dev/pool");

/**
 *
 * @param {*} errorCode error code
 * @param {*} message message that explaining the error(s)
 */

const { default: pool } = require("../db/dev/pool");

const errorFunc = (errorCode, message) => {
  const error = new Error(message);
  error.statusCode = errorCode;
  throw error;
};

exports.createReceipt = async (req, res, next) => {
  const receiptNumber = req.body.receipt;
  const origin = req.body.origin;
  const destination = req.body.destination;
  const shipment_date = req.body.shipment_date;
  const consignee = req.body.consignee;
  const shipper = req.body.shipper;
  const dropPoint = req.body.dropPoint;
  const dropTime = req.body.dropTime;

  try {
    const receiptQuery = await pool.query(
      `INSERT INTO receipts (receipt_number, origin, destination, shipment_date, consignee, shipper, drop_point, drop_time)
      VALUES ('${receiptNumber}', '${origin}', '${destination}', '${shipment_date}', '${consignee}', '${shipper}', '${dropPoint}', '${dropTime}')
      `
    );

    const inserted =
      (await receiptQuery.rows[0].receipt_number) == receiptNumber
        ? true
        : false;

    if (inserted) {
      return res.status(201).json("New receipts created");
    } else {
      errorFunc(406, "Data not inserted!");
    }
  } catch (err) {
    next(err);
  }
};
