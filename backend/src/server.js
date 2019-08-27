const express =  require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);
// ISSO NÃO É BOM FAZER
const connectedUsers = {}
// ISSO NÃO É BOM FAZER

io.on('connection', socket => {
    const { user} = socket.handshake.query;
    connectedUsers[user] = socket.id;
});

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-o44ao.mongodb.net/omnistack8?retryWrites=true&w=majority', {useNewUrlParser: true});
//PAREI NO 17:0 MIN
//
app.use((req, res, next)=>{
    req.io = io;
    req.connectedUsers = connectedUsers;

    return next();
}); //fluxo seguir na aplicação

app.use(cors()); 
app.use(express.json());
app.use(routes);

server.listen(3333);