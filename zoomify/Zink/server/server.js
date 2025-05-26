import express from "express";
import "dotenv/config";
import cors from "cors";
import http from "http";
import { connectDB } from "./lib/db.js";
import userRouter from "./routes/userRoutes.js";
import messageRouter from "./routes/messageRoutes.js";
import {Server} from 'socket.io';

// Create Express app and HTTP server
const app = express();
const server = http.createServer(app);

//Initialize socket.io to server
export const io =new Server(server,{
  cors:{origin:"*"}
})

//Store online users
export const userSocketMap ={};//{userId : sockedId}

//Socket.io connection handler
io.on("connection",(socket)=>{
  const userId = socket.handshake.query.userId;
})




//Middleware setup.....
// this setup is created because all the request to the server is passed through the json
// server
app.use(express.json({limit: "4mb"}));
// limit so that we can upload images of maximum 4mb limit
app.use(cors());
// allow all the url to connect with our backend
app.use("/api/status",(req,res)=>res.send("Server is live"))
// to check whether our backend server is running or not
app.use("/api/auth",userRouter);
//Route setup
app.use("/api/messages",messageRouter);

//Connect to MongoDB
await connectDB();
const PORT = process.env.PORT || 5000;
// to create our port number on which server will run
server.listen(PORT,()=>console.log("Server is running on PORT:"+PORT)
);





