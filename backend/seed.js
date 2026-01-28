const mongoose = require("mongoose");
const Agent = require("./models/Agent");

mongoose.connect("mongodb://127.0.0.1:27017/scenarioDB")
  .then(async () => {
    const agent = await Agent.create({ name: "Test Agent" });
    console.log("AGENT ID:", agent._id);
    process.exit();
  });
