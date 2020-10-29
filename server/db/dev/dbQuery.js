import pool from "./pool";

export default {
  /**
   * DB Query
   * @param {object} queryText
   * @param {object} params
   * @returns {object}
   */
  query(queryText, params) {
    return new Promise((resolve, reject) => {
      pool
        .query(queryText, params)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};
