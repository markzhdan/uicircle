import { useState } from "react";
import "./Messages.css";

const contacts = [
  {
    name: "Juliette",
    message: "Sticker",
    time: "Yesterday",
    unread: 0,
    img: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Joan",
    message: "~ RD: 🏠 1 BEDROOM AVAILABLE IN 3B...",
    time: "Yesterday",
    unread: 4,
    img: "https://i.pravatar.cc/150?img=10",
  },
  {
    name: "Regina",
    message: "~ Meygol: lol thats funnnn",
    time: "Yesterday",
    unread: 2,
    img: "https://i.pravatar.cc/150?img=7",
  },
  {
    name: "Rohan",
    message: "2 people are renewing the lease and nee...",
    time: "Yesterday",
    unread: 0,
    img: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "Destiny",
    message: "Sure hehe",
    time: "Yesterday",
    unread: 5,
    img: "https://i.pravatar.cc/150?img=8",
  },
  {
    name: "Layla",
    message: "damn that's sick",
    time: "Yesterday",
    unread: 0,
    img: "https://i.pravatar.cc/150?u=group",
  },
  {
    name: "Mahita",
    message: "Okay",
    time: "Yesterday",
    unread: 0,
    img: "https://i.pravatar.cc/150?u=default",
  },
  {
    name: "Vania Munjar",
    message: "done",
    time: "Tuesday",
    unread: 0,
    img: "https://i.pravatar.cc/150?u=bank",
  },
  {
    name: "Simon",
    message: "Hey, are we still meeting",
    time: "Monday",
    unread: 0,
    img: "https://i.pravatar.cc/150?u=intl",
  },
];

const chatData = {
  Juliette: [
    { from: "me", text: "Hi Juliette!", time: "9:00 AM" },
    { from: "them", text: "Hello :)", time: "9:01 AM" },
  ],
  Rohan: [
    { from: "them", text: "When will they confirm it", time: "10:32 PM" },
    { from: "them", text: "why so slow", time: "10:32 PM" },
    { from: "me", text: "I don’t know, maybe next week", time: "10:33 PM" },
  ],
  Bestie: [
    { from: "them", text: "u must check it in person seriously", time: "10:33 PM" },
    { from: "me", text: "Yes", time: "10:34 PM" },
    { from: "me", text: "Reached", time: "11:08 PM" },
    { from: "them", text: "Ok are u going to study or shleepu", time: "11:08 PM" },
    { from: "me", text: "Study and then sleep", time: "11:46 PM" },
  ],
};

function Messages() {
  const [selectedChat, setSelectedChat] = useState(null);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (newMessage.trim()) {
      const updated = [...(chatData[selectedChat.name] || [])];
      updated.push({ from: "me", text: newMessage, time: "Now" });
      chatData[selectedChat.name] = updated;
      setNewMessage("");
    }
  };

  return (
    <div className="Messages">
      {!selectedChat ? (
        <>
          <div className="chat-header">UICircle</div>
          <div className="contact-list">
            {contacts.map((chat, idx) => (
              <div
                className="chat-row"
                key={idx}
                onClick={() => setSelectedChat(chat)}
              >
                <img src={chat.img} alt={chat.name} className="avatar" />
                <div className="chat-details">
                  <div className="chat-top">
                    <span className="chat-name">{chat.name}</span>
                    <span className="chat-time">{chat.time}</span>
                  </div>
                  <div className="chat-message">{chat.message}</div>
                </div>
                {chat.unread > 0 && (
                  <div className="unread-badge">{chat.unread}</div>
                )}
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="chat-screen">
          <div className="chat-header chat-header-chat">
            <div className="chat-back" onClick={() => setSelectedChat(null)}>←</div>
            <img src={selectedChat.img} alt={selectedChat.name} className="chat-avatar" />
            <span className="chat-name-header">{selectedChat.name}</span>
            <div className="chat-actions">
              <button title="Voice Call">📞</button>
              <button title="Video Call">🎥</button>
              <button title="Options">⋮</button>
            </div>
          </div>

          <div className="chat-body">
            {(chatData[selectedChat.name] || []).map((msg, idx) => (
              <div
                key={idx}
                className={`message ${msg.from === "me" ? "sent" : "received"}`}
              >
                <div className="message-content">
                  {msg.text}
                  <div className="timestamp">{msg.time}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="chat-input">
            <button className="emoji-btn">😊</button>
            <input
              type="text"
              placeholder="Type a message"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            {newMessage.trim() ? (
              <button onClick={handleSend} className="send-btn">Send</button>
            ) : (
              <button className="mic-btn" title="Record Voice">🎤</button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Messages;