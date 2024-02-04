// Establish WebSocket connection
let url=`ws://${window.location.host}/ws/mywebsocket/`
const socket = new WebSocket(url);

// Event handler for when the WebSocket connection is established
socket.onopen = () => {
  console.log('WebSocket connection established.');
  
  // Send a message to the server
  const message = {
    msg: 'Hello, server!'
  };
  socket.send(JSON.stringify(message));
};

// Event handler for incoming messages from the server
socket.onmessage = (event) => {
  const message = JSON.parse(event.data);
  console.log('Received message from server:', message);
};

// Event handler for WebSocket errors
socket.onerror = (error) => {
  console.error('WebSocket error:', error);
};

// Event handler for when the WebSocket connection is closed
socket.onclose = () => {
  console.log('WebSocket connection closed.');
};

document.getElementById("message").onsubmit = (e) => {
  e.preventDefault();
  let txt = e.target.message;
  let message={
    text: txt
  };
  socket.send(JSON.stringify(message));
}