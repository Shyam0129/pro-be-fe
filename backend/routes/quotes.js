const express = require("express");
const router = express.Router();
const {
  getRandomQuote,
  saveFavoriteQuote,
  generateAIQuote
} = require("../controllers/quoteController");

router.get("/random", getRandomQuote);
router.post("/favorite", saveFavoriteQuote);
router.post("/generate-ai", generateAIQuote);

module.exports = router;
