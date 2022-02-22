const socket = io('http://localhost:3000');

// 5500 client script.js -> 3000 server index.js
// 3000 server index.js -> 5500 client script.js

// index.html ->frontend, script is client-side server, index.js is backend server
const messageContainer = document.getElementById('message-container');
const messageForm = document.getElementById('send-container');
const messageInput = document.getElementById('message-input');

let name = prompt('What is your name');
socket.emit('new-user', name);