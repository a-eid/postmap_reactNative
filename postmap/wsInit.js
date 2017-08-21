// socket = new WebSocket("ws://127.0.0.1:8000/chat/");
// let socket = new WebSocket("ws://echo.websocket.org");
socket = new WebSocket("ws://192.168.0.2:8181/chat/");

let open = false 

socket.onopen = function() {
  console.log("open")
  open = true 
  socket.send("message")
}

socket.onmessage = function(e) {
  console.log(JSON.stringify(e.data))
  console.log("message recieved")
}

socket.onerror = function(e) {
  console.log("error")
  console.log( e.message )
}

// if (socket.readyState == WebSocket.OPEN) socket.onopen();
// undefined


export const send =  data => {
  console.log(open)
  open && console.log("SENDING!!") && socket.send(JSON.stringify(data)) 
}