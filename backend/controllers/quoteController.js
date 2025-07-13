const { OpenAI } = require("openai");

const quotes = [
  { text: "Success doesn't come to you, you go to it.", author: "Marva Collins" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "Dream big and dare to fail.", author: "Norman Vaughan" }
];

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// GET /quotes/random
exports.getRandomQuote = (req, res) => {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  res.json(random);
};

// POST /quotes/favorite
exports.saveFavoriteQuote = (req, res) => {
  const { text, author } = req.body;
  console.log("⭐ Favorite received:", text, "-", author);
  res.status(200).json({ message: "Quote favorited successfully (mocked)." });
};

// POST /quotes/generate-ai
exports.generateAIQuote = async (req, res) => {
  try {
    const prompt = "Give me a short motivational quote with author.";
    const response = await openai.completions.create({
      model: "text-davinci-003",
      prompt: prompt,
      max_tokens: 50,
      temperature: 0.7,
    });

    const text = response.choices[0].text.trim();
    const [quote, author] = text.includes(" - ") ? text.split(" - ") : [text, "AI"];

    res.json({ text: quote, author });
  } catch (err) {
    console.error("OpenAI Error:", err.message);
    res.status(500).json({ error: "Failed to generate quote from AI" });
  }
};
