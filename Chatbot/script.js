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
        response: "Onè Respè I'm your Haitian guide tutor how may I help today?"
    },
    {
        keywords: ["culture", "haitian"],
        response: "What would you like to learn about the Haitian legacy?"
    },
    {
        keywords: ["nation pride"],
        response: "Haiti is the first Black-led republic in the world, born in 1804! Our motto, 'L’Union Fait la Force' (Unity Makes Strength), is the heartbeat of our heritage."
    },
    {
        keywords: ["why"],
        response: "Because it is a soul connected world and have access to be more intimate with your partener"

    },
    {
        keywords: ["who"],
        response: "The first Latin country who took their independence."
    },
    {
        keywords: ["advice"],
        response: "anvan ou monte bwa, gade si ou ka desann li. (Before you climb a tree, see if you can get down.) Think ahead before you start!"
    },
    {
        keywords: ["art"],
        response: "Our culture is a vibrant mix of African, French, and Taíno roots. From our world-renowned art to the heights of Citadelle Laferrière, there is so much to share!"
    },
    {
        keywords:["important date"],
        response: "some important dates in Haiti are:<br> their independance dates(January 1st,)<br> Flag days(May 18th,)"

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
        for (let word of pattern.keywords) {
            if (lowerInput.includes(word)) {
                return pattern.response;
            }
        }
    }

    return defaultResponse;
}

function handleKey(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}