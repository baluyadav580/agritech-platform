const express = require("express");

const router = express.Router();

const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.post("/ask", async (req, res) => {

  try {

    const { question } = req.body;

    const completion = await openai.chat.completions.create({

      model: "gpt-3.5-turbo",

      messages: [
        {
          role: "system",
          content:
            "You are an AI farming expert helping Indian farmers.",
        },
        {
          role: "user",
          content: question,
        },
      ],

    });

    res.json({
      answer: completion.choices[0].message.content,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "AI Error",
    });

  }

});

module.exports = router;