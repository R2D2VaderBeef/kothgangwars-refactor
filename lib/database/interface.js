const express = require("express");
const router = express.Router();

module.exports = {
  router: () => {
    return router;
  },
  retrieve: (name) => {
    const error = new Error("retrieve() not yet implemented");
    throw error;
    return error;
  },
};
