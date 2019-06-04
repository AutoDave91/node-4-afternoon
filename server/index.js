const express = require('express');
const app = express();
const session = require('express-session');
require('dotenv').config();

const checkSession = require('./middlewares/checkForSession');
const swagger = require('./controllers/swagController');
const users = require('./controllers/authController');

app.use(express.json());
const {SERVER_PORT, SESSION_SECRET}= process.env;
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));
app.use(checkSession)

app.get('/api/swag', swagger.getSwag)
app.get('/api/user', users.getUser)

app.post('/api/login', users.login)
app.post('/api/register', users.register)
app.post('/api/signout', users.signout)

app.listen(SERVER_PORT, ()=> console.log(`Listening on server port ${SERVER_PORT}`))