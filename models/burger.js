const orm = require("../config/orm");

var burger = {
  //calls to orm functions
  //list all
  all: function (cb) {
    orm.selectAll("burgers", (response) => cb(response));
  },

  //insert new
  insert: function (data, cb) {
    console.log(data);
    let cols = Object.keys(data).toString();
    let vals = Object.values(data);
    console.log(cols);
    console.log(vals);
    orm.insertOne("burgers", cols, vals, (response) => cb(response));
  },

  //update devoured status
  devour: function (id, cb) {
    orm.updateOne("burgers", "devoured", "true", id, (response) =>
      cb(response)
    );
  },
};

module.exports = burger;
