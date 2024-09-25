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
      <div className="main">
        <div>
          <h1 className="">Messages</h1>
          {messageReceived}
        </div>
        <div>
          <input
            className=""
            type="text"
            placeholder="Send message"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </>
  );
}

export default App;
