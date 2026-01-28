const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const scenarioRoutes = require("./routes/scenarioRoutes");

const app = express();

// ✅ ADD THIS (MUST BE BEFORE ROUTES)
app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/scenarioDB")
  .then(() => console.log("MongoDb Connected"));

app.use("/api", scenarioRoutes);

app.listen(8080, () => {
  console.log("server running on port 8080");
});
