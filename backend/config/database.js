const mongoose = require("mongoose");
require("dotenv").config({ path: "./config.env" });

exports.connectdatabase = () => {
  // console.log(process.env.MONGODB_URL);
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log(`database connected successfully`);
    })
    .catch((err) => {
      console.log(err);

      process.exit(1);
    });
};
