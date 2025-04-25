import { useState } from "react";
import "./Messages.css";

const chatMessages = [
  {
    from: "them",
    text: "When will they confirm it",
    time: "10:32 PM",
  },
  {
    from: "them",
    text: "why so slow",
    time: "10:32 PM",
  },
  {
    from: "me",
    text: "I don’t know they say by next week",
    time: "10:33 PM",
  },
  {
    from: "them",
    text: "u must check it in person seriously",
    time: "10:33 PM",
  },
  {
    from: "them",
    text: "they will just sleep all time",
    time: "10:34 PM",
  },
  {
    from: "me",
    text: "Yes",
    time: "10:34 PM",
  },
  {
    from: "me",
    text: "Reached",
    time: "11:08 PM",
  },
  {
    from: "them",
    text: "Ok are u going to study or shleepu",
    time: "11:08 PM",
  },
  {
    from: "me",
    text: "Study and then sleep",
    time: "11:46 PM",
  },
];

function Messages() {
  const [currentChat, setCurrentChat] = useState(null);
  const contacts = [
    { name: "Meowmy", img: "https://i.pravatar.cc/150?img=12" },
    { name: "Juliette", img: "https://i.pravatar.cc/150?img=10" },
  ];

  return (
    <div className="Messages">
      {!currentChat ? (
        <div className="contact-list">
          <div className="chat-header">WhatsApp</div>
          {contacts.map((chat, idx) => (
            <div
              className="chat-row"
              key={idx}
              onClick={() => setCurrentChat(chat)}
            >
              <img src={chat.img} alt={chat.name} className="avatar" />
              <div className="chat-details">
                <div className="chat-top">
                  <span className="chat-name">{chat.name}</span>
                  <span className="chat-time">Yesterday</span>
                </div>
                <div className="chat-message">Tap to open chat</div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="chat-screen">
          <div className="chat-header" onClick={() => setCurrentChat(null)}>
            ← {currentChat.name}
          </div>
          <div className="chat-body">
            {chatMessages.map((msg, i) => (
              <div
                key={i}
                className={`message ${msg.from === "me" ? "sent" : "received"}`}
              >
                <div className="message-content">
                  {msg.text}
                  <div className="timestamp">{msg.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Messages;