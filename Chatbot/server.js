require("dotenv").config();

const express = require("express");
const OpenAI = require("openai");
const path = require("path");
const app = express();
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });


app.use(express.static(path.join(__dirname)));
app.use(express.json());
app.post("/ai-question", async (req, res) => {

    const { question} = req.body;
    const research = loadResearch();

    try {

        const completion = await openai.chat.completions.create({
        model: "gpt-4.1-mini",
        max_tokens: 1000,
        messages: [
            {
            role: "system",
            content:
                `You are a tutoring assistant.

                Rules:
                - Only use the provided research notes
                - Do NOT use markdown formatting
                - Do NOT use headings (#, ##, ###)
                - Do NOT use bullet points with *, -, or #
                - Write responses in plain sentences only
                - Keep answers short (2-4 sentences)
                - limit AI calls to 10–15 per session`
            },
            {
            role: "user",
            content: `
    Research notes:
    ${research}

    Question:
    ${question}
            `
            }
        ]
        });

        res.json({
        reply: completion.choices[0].message.content
        });

    } catch (error) {
        res.status(500).json({ error: "AI request failed." });
    }
    });

    app.listen(3001, () => {
    console.log("Server running on port 3001");
});
const fs = require("fs");
const research = path.join(__dirname, "research");

function loadResearch() {
    let addResearch = "";

    const files = fs.readdirSync(research);

    for (let file of files) {
        const content = fs.readFileSync(
            path.join(research, file),
            "utf8"
        );
        addResearch += `\n${content}\n`;
    }
    return addResearch;
}
