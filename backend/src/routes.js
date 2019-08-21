const express = require('express');

const routes = express.Router();
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');
routes.get('/', (req,res) => {
    console.log('Hello World sended')
    return res.json(`Hello World => ${req.query.name}`);
});

routes.get('/devs',DevController.index);

// ṔOST É CRIAR
routes.post('/devs', DevController.store);
routes.post('/devs/:devId/likes',LikeController.store);
routes.post('/devs/:devId/dislikes',DislikeController.store);

module.exports = routes;