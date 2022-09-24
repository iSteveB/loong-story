const fs = require('fs');
const UserModel = require('../models/user.model');

const makeFileName = (req)=> {

    const MIME_TYPES = {        
        'image/jpg': 'jpg',
        'image/jpeg': 'jpg',
        'image/png': 'jpg',
    };

    const name = req.file.originalname.toLowerCase().split('.')[0].replace(/\s/g, "_");
    const extension = MIME_TYPES[req.file.mimetype];

    const fileName = name + Math.floor(Date.now() / 1000) + '.' + extension;

    return fileName;

}

module.exports.uploadAvatar = async (req, res) => {
    try {
        await UserModel.findByIdAndUpdate(
            req.body.userId,
            { $set: { picture: `./uploads/profil/${makeFileName(req)}` } },
            { new: true, upsert: true, setDefaultsOnInsert: true }
        )
            .then((docs) => res.status(201).json(docs))
            .catch((error) => res.status(400).json({ error }));
    } catch (error) {
        res.status(500).json({ error });
    };
};
