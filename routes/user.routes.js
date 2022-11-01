const router = require('express').Router();
const authController = require('../controllers/auth.controller');
const userController = require('../controllers/user.controller');
const uploadController = require('../controllers/upload.controller');
const uploadMiddelware = require('../middlewares/avatarUpload.middleware');

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
router.post('/upload', uploadMiddelware, uploadController.uploadAvatar);

module.exports = router;
