Hooks.on('renderChatMessage', (ChatMessage, el) => {
    var container = el.find(".beyond20-chat-damage-buttons");
    container.css({"height": "60px", "top": "calc(-1.5rem - 20px)"});
    container.find("button").css({"height": "3rem", "width": "3rem"});
});