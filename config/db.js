const mongoose = require('mongoose');

mongoose
    .connect(
        `mongodb+srv://${process.env.DB_USER_PASS}@loongstory.xuroevx.mongodb.net/loong-story`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('Failed to connect to MongoDB', err));

('mongodb+srv://iSteveB:zmlAsVlJRLfVti0B@loongstory.xuroevx.mongodb.net/loong-story');
