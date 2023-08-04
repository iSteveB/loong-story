const router = require('express').Router();
const authController = require('../controllers/auth.controller');
const userController = require('../controllers/user.controller');
const uploadController = require('../controllers/upload.controller');
const uploadAvatarMiddelware = require('../middlewares/avatarUpload.middleware');
const { uploadErrors } = require('../utils/errors.utils');
const multer = require('multer');

// Auth
router.post('/register', authController.signUp);
router.post('/login', authController.logIn);
router.get('/logout', authController.logOut);

// User DB
router.get('/', userController.getAllUsers);
router.get('/:id', userController.userInfo);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);
router.patch('/follow/:id', userController.follow);
router.patch('/unfollow/:id', userController.unfollow);

// Upload
router.post('/upload', (req, res, next) => {
    uploadAvatarMiddelware(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            const errors = uploadErrors(err);
            res.status(200).json({ errors });
        } else if (err) {
            res.status(200).json({err});
        } else {
            res.status(400)
            next();
        }
    });
}, uploadController.uploadAvatar);

module.exports = router;
