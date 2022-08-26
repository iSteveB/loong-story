const multer = require('multer');

const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png',
};

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, `${__dirname}/../client/public/uploads/profil/`);
    },
    filename: (req, file, callback) => {
        const name = req.body.name
        const extension = MIME_TYPES[file.mimetype];

        callback(null, name + '.' + extension);
    },
});

module.exports = multer({ storage }).single('file');
