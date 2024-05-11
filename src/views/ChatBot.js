import { useState } from "react";
import "../assets/css/ChatBot.css";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import prompt from "./prompt";

const chatbot_key = "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";
const systemMessage = {
  role: "system",
  content: prompt,
};

function ChatBot() {
  const [messages, setMessages] = useState([
    {
      message:
        "Welcome! I'm your website's personal Bot. I'm here to assist you in understanding the data presented. Let's get started!",
      sentTime: "just now",
      sender: "ChatGPT",
      direction: "incoming",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: "outgoing",
      sender: "user",
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);

    // Initial system message to determine ChatGPT functionality
    // How it responds, how it talks, etc.
    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) {
    // messages is an array of messages
    // Format messages for chatGPT API
    // API is expecting objects in format of { role: "user" or "assistant", "content": "message here"}
    // So we need to reformat

    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return {
        role: role,
        content: messageObject.message,
      };
    });

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [
        systemMessage, // The system message DEFINES the logic of our chatGPT
        ...apiMessages, // The messages from our chat with ChatGPT
      ],
      // stream: false,
    };

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + chatbot_key,
        "Content-Type": "application/json",
        response_format: JSON.stringify({ type: "json_object" }), // JSON.stringify() is used to convert the object to a JSON string
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        setMessages([
          ...chatMessages,
          {
            message: data.choices[0].message.content,
            sender: "ChatGPT",
            direction: "incoming",
          },
        ]);
        setIsTyping(false);
      });
  }
  // top: "67px", // Adjust as needed
  // left: "280px", // Adjust as needed
  // bottom: "55px", // Adjust as needed
  // right: "5px",
  return (
    <div
      style={{
        position: "absolute",
        top: "67px", // Adjust as needed
        left: "280px", // Adjust as needed
        bottom: "5px", // Adjust as needed
        right: "5px",
        overflow: "hidden",
        borderRadius: "10px", // Adjust border radius as needed
        padding: "10px", // Adjust padding as needed
        display: "flex",
        // backgroundColor: "pink",
        flexDirection: "column",
      }}
    >
      <MainContainer
        style={{ flex: 1, marginRight: "15px", borderRadius: "10px" }}
      >
        <ChatContainer>
          <MessageList
            scrollBehavior="smooth"
            style={{ backgroundColor: "#a0d2eb", borderRadius: "10px" }}
            typingIndicator={
              isTyping ? (
                <TypingIndicator content="ViewSummit Bot is typing" />
              ) : null
            }
          >
            {messages.map((message, i) => {
              return (
                <Message
                  key={i}
                  model={message}
                  style={{
                    borderRadius: "5px",
                    marginTop: "50px",
                    marginRight: "30px",
                  }}
                />
              );
            })}
          </MessageList>
        </ChatContainer>
      </MainContainer>
      <div style={{ marginTop: "10px" }}>
        <MessageInput
          // autoCorrect={false}
          placeholder="Type message here"
          onSend={handleSend}
          defaultValue=""
          style={{
            borderRadius: "10px", // Adjust the value as needed to control the amount of curvature
            padding: "5px 10px", // Adjust padding as needed
            marginRight: "15px",
          }}
        />
      </div>
    </div>
  );
}

export default ChatBot;
