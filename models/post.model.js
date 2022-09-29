const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
    {
        posterID: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            trim: true,
        },
        picture: {
            type: String,
        },
        video: {
            type: String,
        },
        likers: {
            type: [String],
            required: true,
        },
        comments: {
            type: [
                {
                    commenterID: String,
                    commenterPseudo: String,
                    text: String,
                    timestamp: Number,
                },
            ],
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('post', PostSchema);