import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Socket, Server } from "socket.io";
import http from "http";

dotenv.config();

const PORT: number = parseInt(process.env.PORT || "5000", 10);

const app = express();
app.use(express.json());
app.use(cors({ origin : "http://localhost:5173"}));

const server = http.createServer(app);
const io = new Server(server, { cors : { origin : "http://localhost:5173"}});

io.on('connection', (socket: Socket) => {
  console.log('A user connected');
   try {
  socket.on('message', (data) => {
     console.log('Message from client:', data);
     io.emit('message', data);
   });
 
   socket.on('disconnect', () => {
     console.log('User disconnected');
   });
   } catch (error) {
     console.log(error)
   }
});

server.listen(PORT, () => {
  console.log(`Listening to PORT ${PORT}`);
});
