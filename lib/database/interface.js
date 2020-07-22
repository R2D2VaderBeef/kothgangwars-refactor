const express = require("express");
const router = express.Router();
module.exports = {
  interface: () => {
    return router;
  },
};
