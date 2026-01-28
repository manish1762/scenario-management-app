const mongoose = require("mongoose");

const scenarioSchema = new mongoose.Schema({
  agentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Agent",
    required: true
  },
  name: String,
  description: String,
  userMessage: String,
  complexity: String,
  category: String
}, { timestamps: true });

module.exports = mongoose.model("Scenario", scenarioSchema);
