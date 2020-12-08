const orm = require("../config/orm");

var burger = {
  //calls to orm functions
  //list all devoured or undevoured
  all: function (status, cb) {
    orm.selectAll("burgers", "devoured", status, (res) => cb(res));
  },

  //insert new
  insert: function (data, cb) {
    orm.insertOne("burgers", "burger_name, icon", data, (res) => cb(res));
  },

  //update devoured status
  devour: function (id, cb) {
    orm.updateOne("burgers", "devoured", "true", id, (res) => cb(res));
  },
};

module.exports = burger;
