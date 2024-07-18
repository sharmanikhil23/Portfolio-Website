import React from "react";
import "./css/sendingMessage.css";

const MessageSentAnimation = () => {
  const sendMessage = () => {
    const sendingAnimation = document.getElementById(
      "sendingAnimation"
    ) as HTMLElement;
    const message = document.getElementById("message") as HTMLElement;

    sendingAnimation.style.display = "inline-block";
    message.innerText = "";

    // Simulate a network request
    setTimeout(() => {
      sendingAnimation.style.display = "none";

      // Simulate success or failure
      const isSuccess = Math.random() > 0.5;
      if (isSuccess) {
        message.innerText = "Message Sent!";
        message.className = "message success";
      } else {
        message.innerText = "Message Failed!";
        message.className = "message failure";
      }
    }, 3000);
  };
  return (
    <div className="container">
      <div className="sending-animation" id="sendingAnimation">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="message" id="message"></div>
      <button onClick={() => sendMessage()}>Send Message</button>
    </div>
  );
};

export default MessageSentAnimation;
