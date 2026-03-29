const express = require('express');
const http = require('http');
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'));


io.on('connection', (socket) => {

    
    socket.on('mensagem', (dados) => {
        
        io.emit('mensagem', dados);
    });

    socket.on('disconnect', () => {
        console.log('Um usuário se desconectou');
    });
});


const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});