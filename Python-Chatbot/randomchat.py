import random

intents = {
    "greetings": {
        "patterns": ["hello", "hi", "hey", "how are you"],
        "responses": ["Hello!", "Hi there!", "Hey, how can I help?"]
    },
    "bye": {
        "patterns": ["bye", "goodbye", "see you"],
        "responses": ["Goodbye!", "See you later!", "Bye!"]
    },
    "questions": {
        "patterns": ["bye", "goodbye", "see you"],
        "responses": ["Goodbye!", "See you later!", "Bye!"]
    }
}

def get_response(message):
    message = message.lower()
    for intent in intents:
        for pattern in intents[intent]["patterns"]:
            if pattern in message:
                return random.choice(intents[intent]["responses"])
    return "Sorry, I don't understand."

while True:
    user_input = input("You: ")
    if user_input.lower() == 'exit':
        break
    bot_response = get_response(user_input)
    print(f"Bot: {bot_response}")
