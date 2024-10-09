import React, { useEffect, useState } from "react";
import io from "socket.io-client";
const socket = io.connect("http://localhost:5174");

function App() {
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");

  const sendMessage = () => {
    socket.emit("send_message", { message });
  };
  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageReceived(data.message);
    });
  }, [socket]);
  return (
    <>
      <div className="wrapper text-white text-center">
        <div className="flex flex-col justify-between h-screen py-[20px]">
          <div className="messages">
            <h1 className="text-5xl font-bold">Messages</h1>
            {messageReceived}
          </div>
          <div className="input-container">
            <input
              className="w-2/4 outline-0 border border-white text-white bg-transparent"
              type="text"
              placeholder="Send message"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
            <button className="py-[10px] px-[20px] bg-transparent text-white border border-white outline-" onClick={sendMessage}>Send</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
