const burger = require("../models/burger");
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  burger.all((result) => {
    let devoured = [];
    let undevoured = [];
    for (line of result) {
      if (line.devoured == true) {
        devoured.push(line);
      } else {
        undevoured.push(line);
      }
    }
    res.render("index", {  undevoured:  undevoured,  devoured: devoured  });
  });
});

router.put("/api/devour/:id", (req, res) => {
  burger.devour(req.params.id, (result) => {
    if (result.affectedRows == 0) {
      //id doesn't exist
      res.status(404).end();
    } else {
      //report success
      res.status(200).end();
    }
  });
});

router.post("/api/burger", (req, res) => {
  let newBurg = { burger_name: req.body.burger_name, icon: req.body.icon };
  burger.insert(newBurg, (result) => {
    res.status(200).end();
  });
});

module.exports = router;
