const express = require('express');
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/user.routes');
const postRoutes = require('./routes/post.routes');
const path = require('path');
const cors = require('cors');

require('dotenv').config({ path: './config/.env' });
require('./config/db');

const { checkUser, requireAuth } = require('./middlewares/auth.middleware');

const app = express();

// Enable CORS
const corsOptions = {
  origin: 'https://loongstory.onrender.com',
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  allowedHeaders: ['Content-Type', 'Authorization'],
  preflightContinue: true,
}

app.options(cors())
app.use(cors(corsOptions))

/*app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://loongstory.onrender.com');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});*/

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//Middleware jwt
app.get('*', checkUser);
app.get('/jwtid', requireAuth, (req, res) => {
    res.status(200).send(res.locals.user._id);
});

//Routes
app.use('/api/user', userRoutes);
app.use('/api/post', postRoutes);
app.use(
    '/uploads/profil',
    express.static(path.join(__dirname, 'uploads/profil'))
);

//Server
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8080;
}
app.listen(port, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});
