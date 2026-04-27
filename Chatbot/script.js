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
// Haiti Tutor Chatbot - Keyword Based System

const dialoguePatterns = [
    // 👋 Greetings
    {
      keywords: ["hello", "hi", "hey"],
      response: "Onè Respè 🇭🇹 I'm your Haitian legacy tutor. How can I help you today?"
    },
  
    // 🌍 Basic Info
    {
      keywords: ["haiti", "country"],
      response: "Haiti is a country in the Caribbean. It shares the island of Hispaniola with the Dominican Republic."
    },
    {
      keywords: ["capital", "city"],
      response: "The capital of Haiti is Port-au-Prince."
    },
    {
      keywords: ["population"],
      response: "Haiti has a population of about 11.8 million people."
    },
    {
      keywords: ["growth", "population growth"],
      response: "Haiti's population growth rate is about 1.1% annually."
    },
  
    // 🗣️ Language
    {
      keywords: ["language", "speak"],
      response: "Haitian Creole is the main language spoken in Haiti. French is also an official language, but not everyone speaks it fluently."
    },
    {
      keywords: ["hello in creole", "bonjou"],
      response: "In Haitian Creole, 'hello' is 'Bonjou'."
    },
  
    // 🏛️ Leadership & Government
    {
      keywords: ["president"],
      response: "Jovenel Moïse was Haiti’s 43rd president, serving from 2017 until his assassination in 2021. Since then, Haiti has been in a political transition."
    },
    {
      keywords: ["leader", "government"],
      response: "Haiti is currently led by a transitional government while working toward stability and future elections."
    },
  
    // ⚔️ History & Revolution
    {
      keywords: ["history"],
      response: "Haiti was once a French colony where enslaved Africans were forced to work. This led to a major الثورة for freedom."
    },
    {
      keywords: ["revolution"],
      response: "The Haitian Revolution (1791-1804) was a successful slave revolt where enslaved people fought for and won their freedom."
    },
    {
      keywords: ["importance", "significance"],
      response:
        "The Haitian Revolution was important because:<br>" +
        "- It created the first independent Black republic in 1804.<br>" +
        "- It was the only successful slave revolt to form a nation.<br>" +
        "- It inspired movements against slavery worldwide."
    },
    {
        requiredWords: ["haiti"], 
        keywords: ["heroes"],
        response:
         "Haiti have a lot of heroes who had died in battles for their independance here are some of the most famous names repeating in Haitian history and the keys one:<br>"+
         "Toussaint Louverture (1803): The primary leader of the revolution, he was captured by the French and died in Fort-de-Joux, France, on April 7, 1803.<br>"+
         "Jean-Jacques Dessalines (1806): Known as the founder of Haiti, he became the first ruler of independent Haiti but was assassinated on October 17, 1806.<br>"+
         "Capois-La-Mort (François Capois) (1806): Known for his immense bravery at the Battle of Vertières, he was assassinated on October 19, 1806, on orders from Henri Christophe.<br>"+
         "Sanité Bélair (1802): A lieutenant in Louverture's army, she was a female freedom fighter captured and executed by the French.<br>"+
         "Dutty Boukman (1791): A Vodou priest and early leader who was killed early in the uprising; his death contributed to the momentum of the slave revolt.<br>"+
         "Henri Christophe (1820): A key general in the revolution who became king; he died by suicide following a massive stroke and political instability."
         

    },
  
    // 🌎 Geography Clarification
    {
      keywords: ["dominican republic"],
      response: "The Dominican Republic shares the island of Hispaniola with Haiti, but they are two separate countries."
    },
    //Historic Sites
    {
        requiredWords: ['historical'],
        keywords: ["touristic"],
        response: "Haiti has a rich mix of history, nature, and culture. Here are some of the most notable tourist attractions you might want to explore:<br>"+
        //🏰 Historic & Cultural Sites
        "Citadelle Laferrière: A massive mountaintop fortress and a symbol of Haitian independence—one of the most impressive in the Americas.<br>"+
        "Sans-Souci Palace Once the royal residence of King Henri Christophe, now dramatic ruins near the Citadelle.<br>"+
        "National Palace of Haiti: Though damaged in the 2010 earthquake, it remains an important historical symbol.<br>"+
        "Iron Market: A vibrant market full of crafts, art, and everyday Haitian life."

    },
  

    //Tourist Sites
    {
        requiredWords: ['tourist, vacation, beach, beaches'],
        keywords: ["touristic"],
        response: "Beaches offer more than scenery—they create experiences<br>"+
         "Labadee: A cruise destination known for clear waters, beaches, and water activities. <br>"+
        "Île-à-Vache: A peaceful island with white-sand beaches and a laid-back vibe.<br>"+
        "Jacmel Beach: Near a charming artistic town, great for relaxing and exploring local culture."
    },
    //Outdores
    {
        requiredWords: ["adventures, nature"],
        keywords:"",
    },




    // 🎭 Culture & Identity
    {
      keywords: ["culture", "haitian"],
      response: "Haitian culture is rich and vibrant, influenced by African, French, and Taíno traditions. It includes music, art, religion, and strong community values."
    },
    {
      keywords: ["art"],
      response: "Haiti is famous for its colorful art, paintings, and architecture, including landmarks like the Citadelle Laferrière."
    },
    {
      keywords: ["nation pride", "pride"],
      response: "Haiti is the first Black-led republic in the world, founded in 1804. Its motto is 'L'Union Fait la Force' (Unity Makes Strength)."
    
    },
    {
        keywords: ["fruit"],
        response: "The national fruit of Haiti is Mango specifically the mago Francique (Fransik)."
    },
    {
        keywords: ["food"],
        response: "* Haitian food is more than a meal—it's a vibrant expression of history and resilience, where bold spices, rich traditions, and shared plates tell the story of Haiti in every bite<br>"+
        "The most iconic traditional dish of Haiti is Griot:Griot is made from marinated pork shoulder that's boiled, then fried until crispy on the outside and tender inside. It's usually served with Pikliz, a tangy, spicy mix of cabbage, carrots, peppers, and vinegar that cuts through the richness of the meat. You'll often also see it paired with rice, fried plantains, or beans..<br>"+
        "Another major staple is Diri ak Djon Djon, a flavorful rice dish made with dried black mushrooms that give it a deep color and earthy taste. It's commonly served alongside meats like griot or seafood.<br>"+
        "If you're exploring Haitian cuisine, these dishes are a great place to start—they represent the bold flavors and cultural influences (African, French, Caribbean) that define the country's food."+
        "If you're exploring Haitian cuisine, these dishes are a great place to start—they represent the bold flavors and cultural influences (African, French, Caribbean) that define the country's food."
    },
    {
        keywords: ["traditional clothing"],
        response: "* Traditional clothing in Haiti is more than fabric it's a vivid celebration of identity, where colorful patterns, flowing silhouettes, and handcrafted details reflect the spirit and heritage of the Haitian people.<br>"+
        "One of the most recognizable styles is the Karabela dress. This is a vibrant, patterned dress worn by women, often made from plaid or bright cotton fabric. It usually has a full skirt and off-the-shoulder or ruffled top, and it's commonly paired with a matching headscarf (called a “tèt mare”). The look is especially popular during cultural events and performances.<br>"+
        "For men, traditional attire often includes a simple but elegant outfit: a loose-fitting shirt (sometimes embroidered or brightly colored) paired with trousers. In folkloric settings, men may also wear outfits that coordinate with the women's Karabela dresses for dances like Kompa dance or other traditional performances.<br>"+
        "Another important element in Haitian dress is the use of handmade textiles and accessories, reflecting the country's strong artisan traditions. Clothing can also vary depending on the region and occasion—rural wear, Vodou ceremonial clothing, and carnival costumes all have distinct styles.<br>"+
        "Overall, Haitian traditional clothing stands out for its bold colors, rhythmic patterns, and deep connection to identity and heritage."

    },
    
  
    // 📅 Important Dates
    {
      keywords: ["important date", "holiday"],
      response:
        "Important dates in Haiti include:<br>" +
        "- Independence Day: January 1st<br>" +
        "- Flag Day: May 18th"
    },
  
    // 💡 Proverbs / Advice
    {
      keywords: ["advice", "proverb"],
      response: "Here’s a Haitian proverb: 'Anvan ou monte bwa, gade si ou ka desann li.' (Before you climb a tree, make sure you can come down.)"
    }
  ];
  
  
  // 🔍 Response Engine
  function getBotResponse(input) {
    const msg = input.toLowerCase();
  
    for (let pattern of dialoguePatterns) {
      const hasKeyword = pattern.keywords.some(word => msg.includes(word));
      const hasRequired =
        !pattern.requiredWords ||
        pattern.requiredWords.every(word => msg.includes(word));
  
      if (hasKeyword && hasRequired) {
        return pattern.response;
      }
    }
  
    // 🤖 Default fallback
    return "I'm still learning 😊 Try asking about Haiti's history, language, or culture!";
  }

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