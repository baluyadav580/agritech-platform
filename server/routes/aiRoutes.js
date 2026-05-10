const express = require("express");

const router = express.Router();

router.post("/ask", (req, res) => {

  const { question } = req.body;

  res.json({
    answer: "🌾 AI Response for: " + question,
  });

});

module.exports = router;