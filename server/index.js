const express = require('express');
const app = express();
const session = require('express-session');
require('dotenv').config();

const checkSession = require('./middlewares/checkForSession');
const swagger = require('./controllers/swagController');

app.use(express.json());
const {SERVER_PORT, SESSION_SECRET}= process.env;
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));
app.use(checkSession)

app.get('/api/swag', swagger.getSwag)

app.listen(SERVER_PORT, ()=> console.log(`Listening on server port ${SERVER_PORT}`))