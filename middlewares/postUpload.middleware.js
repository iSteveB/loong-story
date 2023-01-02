const multer = require('multer');
const { uploadErrors } = require('../utils/errors.utils');

const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'jpg',
};

const maxSize = 500000;

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, `${__dirname}/../client/public/uploads/posts`);
    },
    filename: (req, file, callback) => {
        const name = file.originalname
            .toLowerCase()
            .split('.')[0]
            .replace(/\s/g, '_');
        const extension = MIME_TYPES[file.mimetype];

        callback(null, name + Math.floor(Date.now() / 1000) + '.' + extension);
    },
});

module.exports = multer({
    storage: storage,
    fileFilter: (req, file, callback) => {
        if (
            file.mimetype === 'image/jpg' ||
            file.mimetype == 'image/jpeg' ||
            file.mimetype == 'image/png'
        ) {
            callback(null, true);
        } else {
            callback(null, false);
            return callback(uploadErrors('fichier incompatible'));
        }
    },
    limits: { fileSize: maxSize },
}).single('file');
