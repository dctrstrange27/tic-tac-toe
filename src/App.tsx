import { useState, useEffect } from "react";
import Game from "./components/Game/game";
import * as io from "socket.io-client";

const socket = io.connect("http://localhost:5000");

function App() {
   const [message, setMessage] = useState<string>('');

   const sendMessage = () => {
      // Emit a 'message' event to the server
      socket.emit('message', message);
    };
    
    useEffect(() => {
      // Listen for the 'message' event from the server
      const handleIncomingMessage = (data: string) => {
        console.log('Message from server:', data);
        // Handle the incoming message as needed, e.g., update component state
      };
  
      socket.on('message', handleIncomingMessage);
  
      // Cleanup: Disconnect the socket when the component unmounts
      return () => {
        socket.off('message', handleIncomingMessage);
        socket.disconnect();
      };
    }, []); 
   
   return (
      <>
         <div className="w-full h-screen bg-slate-300">
            <div className="flex flex-col justify-center items-center">
               <h1>Tic Tac Toe</h1>
               <Game />
            </div>
         </div>
      </>
   );
}

export default App;
