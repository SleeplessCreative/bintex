const { pool } = require("../../db/dev/pool");

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

  try {
    const receiptQuery = await pool.query(
      `INSERT INTO receipts (receipt_number, origin, destination, shipment_date, consignee, shipper, drop_point, drop_time)
      VALUES ('${receiptNumber}', '${origin}', '${destination}', '${shipment_date}', '${consignee}', '${shipper}', '{${origin}}', '{${shipment_date}}')
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
        shipmentData: {
          receiptNumber: receiptData.receipt_number,
          origin: receiptData.origin,
          destination: receiptData.destination,
          shipmentDate: receiptData.shipment_date,
          status: receiptData.status,
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

exports.updateReceipts = async (req, res, next) => {
  const receiptNumber = req.body.receipt;
  const newDropPoint = req.body.dropPoint;
  const newDropTime = req.body.dropTime;

  try {
    const searchReceiptQuery = await pool.query(
      `SELECT * FROM receipts WHERE receipt_number='${receiptNumber}'`
    );

    receiptFound = searchReceiptQuery.rowCount == 1 ? true : false;

    if (receiptFound) {
      receiptData = searchReceiptQuery.rows[0];
      console.log(receiptData);

      const updatePointQuery = await pool.query(
        `UPDATE receipts SET drop_point = array_append(drop_point, '${newDropPoint}') where receipt_number = '${receiptNumber}'`
      );

      console.log(updatePointQuery);

      const updateTimeQuery = await pool.query(
        `UPDATE receipts SET drop_time = array_append(drop_time, '${newDropTime}') where receipt_number = '${receiptNumber}'`
      );

      console.log(updateTimeQuery);

      return res.status(201).json("success");
    } else {
      errorFunc(401, "Data not found!");
    }
  } catch (err) {
    next(err);
  }
};
