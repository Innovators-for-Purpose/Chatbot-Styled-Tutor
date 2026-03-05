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
        response: "JavaScript isn't Java!"
    },
    {
        keywords: ["javascript", "js"],
        response: "JavaScript makes websites interactive!"
    }
    
];

const defaultResponse = "I'm not sure about that yet. Try another question!";


// ===============================
// CORE LOGIC (DO NOT EDIT THIS WITHOUT PERMISSION)
// This logic is what allows the bot to function and communicate with you.
// If you have any questions about the logic, and how to expand it, please ask and we can come up with ideas.
// ===============================

function sendMessage() {
    const inputElement = document.getElementById("userInput");
    const messages = document.getElementById("messages");
    const userText = inputElement.value.trim();

    if (userText === "") return;

    addMessage("You", userText, "user-message");

    const botReply = getBotReply(userText);

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

function getBotReply(input) {
    const lowerInput = input.toLowerCase();

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
        return pattern.response;
        }
        
    }

    return defaultResponse;
}

function handleKey(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}