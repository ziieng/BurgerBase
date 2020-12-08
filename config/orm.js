const connection = require("./connection");

const orm = {
  selectAll(table, filtercol, filtercond, cb) {
    connection.query(
      `SELECT * FROM ${table} WHERE ${filtercol} = ${filtercond}`,
      (err,   res) => {
            if (err) console.log(err);
            cb(res);
          }
    );
  },

  insertOne(intable, conds, values, cb) {
    connection.query(
      `INSERT INTO ${intable} (${conds}) VALUES ?`,
      values,
      (err,   res) => {
            if (err) console.log(err);
            cb(res);
          }
    );
  },

  updateOne(table,upcol,upval,upid, cb) {
    connection.query(`UPDATE ${table} SET ${upcol} = ${upval} WHERE id = ${upid}`,
    (err, res) => {
      if (err) console.log(err);
      cb(res);
    });
  },
};

module.exports = orm;
