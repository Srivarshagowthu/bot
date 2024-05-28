async function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (!userInput) return;
  
    const chatBox = document.getElementById('chat-box');
    const userMessageElement = document.createElement('div');
    userMessageElement.classList.add('user');
    userMessageElement.innerHTML = `<p>${userInput}</p>`;
    chatBox.appendChild(userMessageElement);
  
    document.getElementById('user-input').value = '';
  
    try {
      
      const botResponse = await getBotResponse(userInput);
      const botMessageElement = document.createElement('div');
      botMessageElement.classList.add('chat-bot');
      botMessageElement.innerHTML = `<p>${botResponse}</p>`;
      chatBox.appendChild(botMessageElement);
      chatBox.scrollTop = chatBox.scrollHeight;
    } catch (error) {
      console.error('Error fetching bot response:', error);
    }
  }
  
  async function getBotResponse(userInput) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Replace this with actual bot logic or API call to fetch response
    return `Sorry, I'm just a demo bot. I can't provide real responses. You said: ${userInput}`;
  }
  