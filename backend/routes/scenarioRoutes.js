const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Scenario = require("../models/Scenario");

// ✅ GET scenarios by agentId (WITH VALIDATION)
router.get("/scenarios/:agentId", async (req, res) => {
  try {
    const { agentId } = req.params;

    // validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(agentId)) {
      return res.status(400).json({ message: "Invalid agentId" });
    }

    const scenarios = await Scenario.find({ agentId });
    res.json(scenarios);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ✅ CREATE scenario
router.post("/scenarios", async (req, res) => {
  try {
    const scenario = await Scenario.create(req.body);
    res.json(scenario);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ✅ DELETE scenario
router.delete("/scenarios/:id", async (req, res) => {
  try {
    await Scenario.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
