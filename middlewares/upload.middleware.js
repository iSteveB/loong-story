const multer = require('multer');
const UserModel = require('../models/user.model');
const uploadController = require('../controllers/upload.controller');

const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png',
};

const maxSize = 500000;

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, `${__dirname}/../client/public/uploads/profil/`);
    },
    filename: (req, file, callback) => {
        const name = file.originalname.split('.').join('').split(' ').join('-');
        const extension = MIME_TYPES[file.mimetype];

        callback(null, name + Date.now() + '.' + extension);
    }
});

module.exports = multer({ storage: storage, fileFilter: (req, file, callback) => {
    if (
        file.mimetype === 'image/jpg' ||
        file.mimetype == 'image/jpeg' ||
        file.mimetype == 'image/png'
        ) {
        callback(null, true);
    } else {
        callback(null, false)
        return callback(new Error('Seul les fichiers .png, .jpeg et .jpg sont acceptés. '))
    }
},
limits : {fileSize : maxSize}}).single('profilPicture');
