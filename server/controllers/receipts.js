const { pool } = require("../db/dev/pool");

/**
 *
 * @param {*} errorCode error code
 * @param {*} message message that explaining the error(s)
 */

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
      `INSERT INTO receipts (receipt_number, origin, destination, shipment_date, consignee, shipper)
      VALUES ('${receiptNumber}', '${origin}', '${destination}', '${shipment_date}', '${consignee}', '${shipper}')
      `
    );

    const inserted = receiptQuery.command == "INSERT" ? true : false;

    if (inserted) {
      return res.status(201).json("New receipts created");
    } else {
      errorFunc(406, "Data not inserted!");
    }
  } catch (err) {
    next(err);
  }
};

exports.getReceipts = async (req, res, next) => {
  const receiptNumber = req.body.receipt;

  try {
    const searchReceiptQuery = await pool.query(
      `SELECT * FROM receipts WHERE receipt_number='${receiptNumber}'`
    );

    // console.log(searchReceiptQuery);
    receiptFound = searchReceiptQuery.rowCount == 1 ? true : false;

    if (receiptFound) {
      receiptData = searchReceiptQuery.rows[0];
      console.log(receiptData);
      return res.status(201).json({
        shipmentDate: {
          receiptNumber: receiptData.receipt_number,
          origin: receiptData.origin,
          destination: receiptData.destination,
          shipmentDate: receiptData.shipment_date,
          consignee: receiptData.consignee,
          shipper: receiptData.shipper,
          dropPoint: receiptData.drop_point,
          dropTime: receiptData.drop_time,
        },
      });
    } else {
      errorFunc(401, "Data not found!");
    }
  } catch (err) {
    next(err);
  }
};
