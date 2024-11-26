document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const userInput = document.getElementById('user-input');
    const message = userInput.value.trim();

    if (message === "") return;

    addMessageToChat('user', message);
    userInput.value = "";

    // Simulate bot response
    setTimeout(() => {
        const botResponse = getBotResponse(message);
        addMessageToChat('bot', botResponse);
    }, 500);
}

function addMessageToChat(sender, message) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.classList.add(sender);
    messageElement.innerHTML = `<span class="${sender}">${sender === 'user' ? 'You' : 'Bot'}: </span>${message}`;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(userMessage) {
    // Simple responses based on keywords
    if (userMessage.toLowerCase().includes("hello")) {
        return "Hello! How can I assist you today?";
    } else if (userMessage.toLowerCase().includes("how are you")) {
        return "I'm just a bot, but I'm here to help!";
    } else {
        return "I'm not sure how to respond to that, but I'm learning!";
    }
}
