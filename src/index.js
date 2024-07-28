import http from "http";
import {Server as SocketServer } from "socket.io";

import sockets from "./sockets.js";
import app from "./app.js";
import { PORT } from "./config.js";


// Server http
const server = http.createServer(app);
const httpServer = server.listen(PORT);
console.log("Server started on port ", PORT);

//Comunicacion por sockets
const io = new SocketServer(httpServer, {
    cors: {
        origin: true
    }
});
sockets(io);
