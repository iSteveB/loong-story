const router = require('express').Router();
const multer = require('multer');
const postController = require('../controllers/post.controller');
const postUploadMiddelware = require('../middlewares/postUpload.middleware');
const { uploadErrors } = require('../utils/errors.utils');

router.get('/', postController.readPost);
router.post(
    '/',
    (req, res, next) => {
        postUploadMiddelware(req, res, function (err) {
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
    },
    postController.createPost
);
router.put('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);
router.patch('/like-post/:id', postController.likePost);
router.patch('/unlike-post/:id', postController.unlikePost);

// Comments

router.patch('/comment-post/:id', postController.commentPost);
router.patch('/edit-comment-post/:id', postController.editCommentPost);
router.patch('/delete-comment-post/:id', postController.deleteCommentPost);

module.exports = router;
