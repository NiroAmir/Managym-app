const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/managym_app")
  .then(() => console.log("connected to MongoDb Locally!"))
  .catch((error) => console.log(`could not connect to mongoDb: ${error}`));
