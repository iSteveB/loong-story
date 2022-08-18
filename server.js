const express = require('express');
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/user.routes');

require('dotenv').config({ path: './config/.env' });
require('./config/db');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//Routes
app.use('/api/user', userRoutes);

//Server
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});
