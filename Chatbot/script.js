// ===============================
// PATTERNS SECTION:
// You can add new dialogue pattterns here.
//
// "keywords" are the words that will trigger a response from the chatbot, you can make full sentences
// and the bot will respond based on a word it recognizes.
//
// The defaultResponse is the response you get when the bot does't recognize a keyword.
//
// GOAL 1: Add dialogue patterns for "bye", "question", "help", and other dialogue the bot should know
// GOAL 2: Add a subject you are interested in, and have the bot have responses for it.
// ===============================

const dialoguePatterns = [
    {
        keywords: ["hello", "hi"],
        response: "Hello! What would you like to learn today?"
    },
    {
        keywords: ["html"],
        response: "HTML is used to structure content on a webpage."
    },
    {
        keywords: ["css"],
        response: "CSS controls the styling of a webpage."
    },
    {
        requiredWords: ["not"],
        keywords: ["javascript", "js"],
        response: "Java isn't Javascript!"
    },
    {
        keywords: ["javascript", "js"],
        response: "<br>•JavaScript makes websites interactive!!<br>•It is useful for making interactive webpages"
    }
    
];

const defaultResponse = "I'm not sure about that yet. Try another question!";


const researchNotes = `
HTML uses tags to structure webpages.
CSS controls styling and layout.
JavaScript makes webpages interactive.
`;


// ===============================
// CORE LOGIC (DO NOT EDIT THIS WITHOUT PERMISSION)
// This logic is what allows the bot to function and communicate with you.
// If you have any questions about the logic, and how to expand it, please ask and we can come up with ideas.
// ===============================



async function sendMessage() {
    const inputElement = document.getElementById("userInput");
    const messages = document.getElementById("messages");
    const userText = inputElement.value.trim();

    if (userText === "") return;

    addMessage("You", userText, "user-message");

    const botReply = await getBotReply(userText);

    setTimeout(() => {
        addMessage("Tutor", botReply, "bot-message");
        messages.scrollTop = messages.scrollHeight;
    }, 400);

    inputElement.value = "";
}

function addMessage(sender, text, className) {
    const messages = document.getElementById("messages");
    const message = document.createElement("div");
    message.className = className;
    message.innerHTML = `<strong>${sender}:</strong> ${text}`;
    messages.appendChild(message);
}

async function getBotReply(input) {
    const lowerInput = input.toLowerCase();

    if (lowerInput.includes("calculate")) {
        let expression = lowerInput.replace(/calculate/gi, "").trim();
        
        try {
            let result = new Function('return ' + expression)();
            return "The result is " + result;
        } catch (e) {
            return "I couldn't calculate that. Please use numbers and +,-,*,/.";
        }
    }


    for (let pattern of dialoguePatterns) {

        let requiredMatch = true;
        let keywordMatch = true;

        if (pattern.requiredWords) {
            requiredMatch = pattern.requiredWords.every(word =>
                lowerInput.includes(word)
            );
        }
        if (pattern.keywords) {
            keywordMatch = pattern.keywords.some(word =>
                lowerInput.includes(word)
                );
                
            }
        if (requiredMatch && keywordMatch) {
            if (!input.includes("?")) {
                return pattern.response;
            }
            const aiResponse = await askAI(input);
            return pattern.response + "<br><br><em>AI:</em> " + aiResponse;
            }
    }
    //return defaultResponse;
    return await askAI(input)
}


async function askAI(question) {
    const response = await fetch("/ai-question", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ question })
    });

    const data = await response.json();
    return data.reply;
}

// async function main() {
//     const completion = await openai.chat.completions.create({
//       model: "gpt-4o",
//      messages: [
//        { role: "system", content: "You are a simple chatbot that answers questions based on the specific subjects." },
//         { role: "user", content: "Write a haiku about programming." },
//       ],
//     });
  
//     console.log(completion.choices[0].message.content);
//   }
  
//   main();


// async function getAIresponse(keyword) {
//     const completion = await openai.chat.completions.create({
//         model: "gpt-4o",
//         instructions:"generate a response based on keywords",
//         input: keywords,
//     });
//     console.log("AI Response:", response.output_text);
// }
// getAIResponse("JavaScript, API, integration");



function handleKey(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}